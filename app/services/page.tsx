import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "전문 자문",
  description:
    "면허 등록부터 양도양수·기업진단·연말결산까지, 건설 경영 전 과정을 책임지는 17년 경력 전문가의 실무 지원.",
};

const SERVICES = [
  {
    no: "01",
    title: "신규 · 추가 등록",
    desc: "종합·전문건설업과 전기·정보통신·소방공사업 등록. 자본금·기술인력·공제조합 요건을 처음부터 끝까지 검토해 드립니다.",
    tags: ["신규등록", "추가등록", "요건검토"],
  },
  {
    no: "02",
    title: "양도 · 양수 (M&A)",
    desc: "비공개 매물 매칭부터 실사, 실적 승계, 신고 수리까지. 커뮤니티 회원 간 거래는 더 빠르고 안전합니다.",
    tags: ["매물매칭", "실적승계", "법인전환"],
  },
  {
    no: "03",
    title: "기업진단 · 실태조사",
    desc: "실질자본금 진단보고서 발급과 연말 실태조사 사전 대비. 등록말소·영업정지 리스크를 미리 차단합니다.",
    tags: ["진단보고서", "실태조사", "연말결산"],
  },
  {
    no: "04",
    title: "분할 · 합병",
    desc: "실적과 시공능력평가액을 지키는 구조 설계. 인허가·공고·등기까지 일괄 처리합니다.",
    tags: ["분할", "흡수합병", "승계설계"],
  },
  {
    no: "05",
    title: "하청 수주 · 입찰 지원",
    desc: "실적 관리, 입찰 자격 점검, 협력업체 등록 지원으로 수주 기회를 넓힙니다.",
    tags: ["실적관리", "입찰자격", "협력사등록"],
  },
  {
    no: "06",
    title: "규제 대응 · 안전행정",
    desc: "안전 규제 강화 시대의 실태 점검. 제도 변경 안내부터 서류 대응까지 함께합니다.",
    tags: ["규제속보", "안전행정", "제도대응"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-navy-deep text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
          <Badge className="border-brass/40 bg-brass/15 text-brass hover:bg-brass/20">
            CONSULTING
          </Badge>
          <h1 className="font-display mt-5 max-w-3xl text-[30px] font-black leading-[1.25] tracking-tight md:text-[42px]">
            커뮤니티가 잇고,
            <br />
            17년 경력이 완성합니다
          </h1>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-white/70 md:text-[16px]">
            면허 등록에서 양도양수, 기업진단과 연말결산까지. 거래의 시작과
            끝에서 17년 실무 경력의 전문가가 책임을 집니다. 멤버 회원에게는
            수수료 할인이 적용됩니다.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div
              key={s.no}
              className="flex flex-col border border-border bg-card p-7 transition-shadow hover:shadow-md"
            >
              <span className="text-[13px] font-extrabold text-brass">{s.no}</span>
              <h2 className="mt-2 text-[18px] font-bold">{s.title}</h2>
              <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-secondary px-2.5 py-1 text-[11px] font-semibold text-secondary-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-14 md:flex-row md:items-center md:px-6">
          <div>
            <h2 className="text-[22px] font-extrabold tracking-tight md:text-[28px]">
              내 상황에 맞는 방법, 먼저 들어보세요
            </h2>
            <p className="mt-2 text-[14px] text-white/65">
              상담은 무료입니다. 커뮤니티 가입과 함께 문의하셔도 됩니다.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" variant="outline" className="h-12 border-white/25 bg-transparent px-7 text-white hover:bg-white/10 hover:text-white" asChild>
              <a href="tel:000-0000-0000">
                <Phone className="mr-1.5 h-4 w-4" /> 전화 상담
              </a>
            </Button>
            <Button size="lg" className="h-12 bg-brass px-7 text-navy-deep hover:bg-brass/85" asChild>
              <Link href="/community#join">
                커뮤니티 가입 신청 <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
