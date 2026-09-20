import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "이용약관",
};

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 md:px-6">
      <h1 className="font-display text-[26px] font-black tracking-tight">이용약관</h1>
      <p className="mt-2 text-[13px] text-muted-foreground">시행일: 2026년 ○월 ○일</p>
      <div className="mt-8 space-y-6 text-[13.5px] leading-relaxed text-muted-foreground">
        <div>
          <h2 className="mb-2 text-[16px] font-bold text-foreground">제1조 (목적)</h2>
          <p>
            본 약관은 로열빌더스클럽코리아(이하 &quot;클럽&quot;)가 제공하는
            멤버십 커뮤니티 및 관련 서비스의 이용 조건과 절차를 규정합니다.
          </p>
        </div>
        <div>
          <h2 className="mb-2 text-[16px] font-bold text-foreground">제2조 (멤버십)</h2>
          <p>
            멤버십은 가입 신청 후 클럽의 심사를 거쳐 승인되며, 연회비 납부 시
            시작됩니다. 클럽은 허위 정보 제공, 커뮤니티 규칙 위반 시 승인을
            거절하거나 멤버십을 해지할 수 있습니다.
          </p>
        </div>
        <div>
          <h2 className="mb-2 text-[16px] font-bold text-foreground">제3조 (환불)</h2>
          <p>
            멤버십 중도 해지 시 잔여 개월 수 기준으로 환불합니다. 단, 회원 귀책
            사유로 인한 퇴출의 경우 환불이 제한될 수 있습니다.
          </p>
        </div>
        <div>
          <h2 className="mb-2 text-[16px] font-bold text-foreground">제4조 (커뮤니티 규칙)</h2>
          <p>
            회원은 실명·실매물 원칙을 준수해야 하며, 허위 정보 유포, 무단 광고,
            타 회원에 대한 비방 시 경고 후 이용이 제한됩니다.
          </p>
        </div>
        <div>
          <h2 className="mb-2 text-[16px] font-bold text-foreground">제5조 (책임의 한계)</h2>
          <p>
            커뮤니티에서 공유되는 매물·거래 정보의 최종 판단과 계약 책임은 거래
            당사자에게 있습니다. 클럽은 중개·검증 지원을 제공하나 거래 결과에
            대한 법적 책임은 부담하지 않습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
