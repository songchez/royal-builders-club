import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침",
};

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 md:px-6">
      <h1 className="font-display text-[26px] font-black tracking-tight">개인정보처리방침</h1>
      <p className="mt-2 text-[13px] text-muted-foreground">시행일: 2026년 ○월 ○일</p>
      <div className="prose-custom mt-8 space-y-6 text-[13.5px] leading-relaxed text-muted-foreground">
        <div>
          <h2 className="mb-2 text-[16px] font-bold text-foreground">제1조 (처리 목적)</h2>
          <p>
            로열빌더스클럽코리아는 멤버십 가입 심사, 뉴스레터 발송, 전문가 자문
            상담 응대를 위해서만 개인정보를 처리합니다.
          </p>
        </div>
        <div>
          <h2 className="mb-2 text-[16px] font-bold text-foreground">제2조 (수집 항목)</h2>
          <p>
            · 멤버십 가입 신청: 성함, 연락처, 회사명, 보유 면허, 가입 목적
            <br />· 뉴스레터 구독: 이름, 이메일, 구분
            <br />· 상담 문의: 이름, 연락처, 문의 내용
          </p>
        </div>
        <div>
          <h2 className="mb-2 text-[16px] font-bold text-foreground">제3조 (보유 기간)</h2>
          <p>
            상담·신청 기록은 목적 달성(또는 상담 종료) 후 1년간 보관 후
            파기합니다. 법령에 따른 보존 의무가 있는 경우 해당 기간을 따릅니다.
          </p>
        </div>
        <div>
          <h2 className="mb-2 text-[16px] font-bold text-foreground">제4조 (수신 동의)</h2>
          <p>
            광고성 뉴스레터는 사전 수신동의를 받은 경우에만 발송하며, 모든
            메일에 수신거부 링크를 제공합니다. 야간(21시~익일 08시)에는 발송하지
            않습니다.
          </p>
        </div>
        <div>
          <h2 className="mb-2 text-[16px] font-bold text-foreground">제5조 (권리 및 문의)</h2>
          <p>
            정보주체는 언제든 열람·정정·삭제·수신거부를 요청할 수 있으며, 문의는
            개인정보 보호책임자에게 연락해 주시기 바랍니다. (담당자·연락처는 정식
            서비스 개시 시 기재)
          </p>
        </div>
      </div>
    </section>
  );
}
