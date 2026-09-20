/**
 * 환경 적응형 레코드 저장소.
 * - 로컬/Node: data/*.json 파일에 누적 저장
 * - Cloudflare Workers: 파일시스템이 없으므로 KV 바인딩(RBC_STORE)이 있으면 KV에,
 *   없으면 워커 로그에만 남기고 정상 응답(우아한 축소)
 */
import fs from "fs";
import path from "path";

export async function appendRecord(kind: string, record: unknown) {
  // 1) Node 파일시스템 시도
  try {
    if (typeof process !== "undefined" && !isWorkersRuntime()) {
      const dir = path.join(process.cwd(), "data");
      fs.mkdirSync(dir, { recursive: true });
      const file = path.join(dir, `${kind}.json`);
      const list = fs.existsSync(file)
        ? (JSON.parse(fs.readFileSync(file, "utf-8")) as unknown[])
        : [];
      list.push(record);
      fs.writeFileSync(file, JSON.stringify(list, null, 2));
      return { stored: "fs" as const };
    }
  } catch {
    /* fallthrough */
  }

  // 2) Cloudflare KV 시도
  try {
    const { getCloudflareContext } = await import("@opennextjs/cloudflare");
    const ctx = getCloudflareContext();
    const kv = (ctx.env as Record<string, unknown> | undefined)?.RBC_STORE as
      | { put: (k: string, v: string) => Promise<void>; get: (k: string) => Promise<string | null> }
      | undefined;
    if (kv) {
      const prev = (await kv.get(kind)) ?? "[]";
      const list = JSON.parse(prev) as unknown[];
      list.push(record);
      await kv.put(kind, JSON.stringify(list));
      return { stored: "kv" as const };
    }
  } catch {
    /* fallthrough */
  }

  // 3) 로그에만 기록 (배포 환경에서 저장소가 없어도 UX는 유지)
  console.log(`[store:${kind}]`, record);
  return { stored: "log" as const };
}

export function isWorkersRuntime() {
  return (
    typeof (globalThis as Record<string, unknown>).WebSocketPair === "function" ||
    typeof (globalThis as Record<string, unknown>).caches !== "undefined" &&
      typeof process.cwd !== "function"
  );
}
