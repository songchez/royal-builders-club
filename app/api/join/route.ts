import { NextRequest, NextResponse } from "next/server";
import { appendRecord } from "@/lib/store";

/**
 * 커뮤니티 가입 신청 수신 엔드포인트
 * ------------------------------------------------
 * 신청 내역을 환경 적응형 저장소에 저장합니다.
 * 로컬: data/join-applications.json / Workers: KV(RBC_STORE) 또는 로그.
 * 실서비스 전환 시 저장소(DB/CRM) 또는 알림(슬랙/카카오)으로 교체하세요.
 */

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, contact, company, license, purpose } = body ?? {};

    if (!name || !contact || !company) {
      return NextResponse.json(
        { ok: false, error: "missing required fields" },
        { status: 400 }
      );
    }

    const entry = {
      id: Date.now(),
      createdAt: new Date().toISOString(),
      status: "pending",
      name,
      contact,
      company,
      license: license ?? "",
      purpose: purpose ?? "",
    };

    const { stored } = await appendRecord("join-applications", entry);

    return NextResponse.json({ ok: true, id: entry.id, stored });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
