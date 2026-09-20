import { NextRequest, NextResponse } from "next/server";
import { appendRecord } from "@/lib/store";

/**
 * 뉴스레터 구독 수신 엔드포인트 (플레이스홀더)
 * ------------------------------------------------
 * 지금은 요청을 검증하고 수락만 합니다.
 * 실제 발송 서비스(스티비, 메일침 등) 연동 시
 * 아래 주석 위치에 API 호출 한 줄만 추가하면 됩니다.
 *
 * 예) const res = await fetch(STIBEE_API_URL, { ... });
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, segment } = body ?? {};

    if (!name || !email || !segment) {
      return NextResponse.json(
        { ok: false, error: "missing fields" },
        { status: 400 }
      );
    }

    // TODO: 이메일 발송 서비스 연동 지점
    await appendRecord("newsletter", { name, email, segment });
    console.log("[newsletter] new subscriber:", { name, email, segment });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
