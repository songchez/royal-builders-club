import { NextRequest, NextResponse } from "next/server";
import { appendRecord, isWorkersRuntime } from "@/lib/store";

/**
 * 전문가 문의 수신 엔드포인트
 * ------------------------------------------------
 * 1) 문의를 환경 적응형 저장소(lib/store)에 저장 — 로컬: data/inquiries.json, Workers: KV/로그
 * 2) SMTP 환경변수가 설정되어 있고 Node 런타임이면 담당자 이메일로 즉시 발송
 *
 * 이메일 발송을 켜려면 .env.local 에 아래 값을 채워넣으세요:
 *   SMTP_HOST=smtp.worksmobile.com   (네이버 웍스 예시)
 *   SMTP_PORT=587
 *   SMTP_USER=hello@royalbuildersclub.kr
 *   SMTP_PASS=비밀번호
 *   INQUIRY_TO=받는 담당자 이메일
 */

const TOPIC_LABEL: Record<string, string> = {
  license: "면허 설립 · 등록",
  diagnosis: "기업진단 · 실태조사",
  balance: "연말결산 · 잔고증명",
  craft: "기능사 · 자격 문의",
  etc: "그 외 · 커뮤니티 가입",
};

function smtpConfigured() {
  return Boolean(
    process.env.SMTP_HOST &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS &&
      process.env.INQUIRY_TO
  );
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { topic, name, contact, message } = body ?? {};

    if (!name || !contact || !message) {
      return NextResponse.json(
        { ok: false, error: "missing required fields" },
        { status: 400 }
      );
    }

    const topicLabel = TOPIC_LABEL[topic] ?? "그 외 문의";
    const entry = {
      id: Date.now(),
      createdAt: new Date().toISOString(),
      status: "new",
      topic,
      topicLabel,
      name,
      contact,
      message,
    };

    // 1) 저장 (fs → KV → 로그 순으로 자동 축소)
    const { stored } = await appendRecord("inquiries", entry);

    // 2) 이메일 발송 (설정 + Node 런타임일 때만)
    let emailed = false;
    if (smtpConfigured() && !isWorkersRuntime()) {
      try {
        const nodemailer = (await import("nodemailer")).default;
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: Number(process.env.SMTP_PORT ?? 587),
          secure: Number(process.env.SMTP_PORT) === 465,
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });
        await transporter.sendMail({
          from: `"로열빌더스클럽" <${process.env.SMTP_USER}>`,
          to: process.env.INQUIRY_TO,
          subject: `[문의 접수] ${topicLabel} — ${name}`,
          text: [
            `■ 문의 주제: ${topicLabel}`,
            `■ 성함: ${name}`,
            `■ 연락처: ${contact}`,
            "",
            "■ 문의 내용:",
            message,
            "",
            `■ 접수 시각: ${entry.createdAt}`,
          ].join("\n"),
        });
        emailed = true;
      } catch (err) {
        console.error("[inquiry] mail send failed:", err);
      }
    } else {
      console.log(`[inquiry] stored=${stored}, SMTP 미발송:`, entry);
    }

    return NextResponse.json({ ok: true, id: entry.id, emailed });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
