import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NewsletterForm } from "@/components/newsletter-form";
import { InquiryForm } from "@/components/inquiry-form";
import { Reveal, CountUp } from "@/components/reveal";
import { OrgMarquee } from "@/components/marquee";
import { Reviews } from "@/components/reviews";

/* ── 자문 영역 (대장 행) ─────────────────────────── */
const SERVICES = [
  {
    no: "01",
    title: "기업진단 · 실태조사",
    desc: "실질자본금 진단보고서 발급, 연말 실태조사 사전 대비. 등록말소·영업정지 리스크를 통보 전에 차단합니다.",
    meta: "연말 집중 기간",
  },
  {
    no: "02",
    title: "면허 등록 · 관리",
    desc: "신규·추가 등록부터 자본금·기술인력·사무실 요건 유지까지. 기준이 바뀌면 먼저 알려드리고 맞춰드립니다.",
    meta: "설립부터 상시",
  },
  {
    no: "03",
    title: "양도 · 양수 중개",
    desc: "시세 산정, 숨은 부채 검증, 조건 조율까지 전 과정 담당. 브로커 없이 검증된 상대와 거래합니다.",
    meta: "비공개 매물",
  },
  {
    no: "04",
    title: "연말결산 · 잔고증명",
    desc: "잔고증명서 준비, 자본 구성 점검, 실질자본금 미달 사전 해소. 12월이 되기 전에 시작해야 합니다.",
    meta: "12월 마감",
  },
  {
    no: "05",
    title: "기술인력 · 자격",
    desc: "기능사·기사 인정 종목 확인, 상시 근무 요건, 인력 구성 대안까지. 기준표에 없는 사례도 풀어드립니다.",
    meta: "수시 문의",
  },
  {
    no: "06",
    title: "규제 대응 · 제도 변경",
    desc: "시정명령·영업정지 통보 대응, 시행령 개정 해석. 제도 변경은 늘 예고 없이 오고, 대비는 늘 먼저 해야 합니다.",
    meta: "통보 즉시",
  },
];

/* ── 자문 원칙 ─────────────────────────────────── */
const PRINCIPLES = [
  {
    title: "반려 없이, 한 번에",
    desc: "접수 전 사전 검토로 반려 사유를 먼저 없앱니다. 고객이 서류 때문에 잃는 시간이 곧 손실입니다.",
  },
  {
    title: "비용은 처음 그대로",
    desc: "시작할 때 보여드린 수수료에서 말이 바뀌지 않습니다. 추가 비용이 생길 일은, 생기기 전에 말씀드립니다.",
  },
  {
    title: "기록이 다음 위기를 막습니다",
    desc: "등록·진단으로 끝나지 않습니다. 기준일과 결산 일정까지 기록으로 관리해 매년 연말을 미리 준비합니다.",
  },
];

/* ── 진행 절차 ─────────────────────────────────── */
const STEPS = [
  {
    no: "01",
    title: "문의 접수",
    desc: "메일로 상황을 보내주시면 당일 확인, 영업일 기준 하루 안에 실무 담당자가 직접 회신합니다.",
  },
  {
    no: "02",
    title: "현황 진단",
    desc: "서류와 실질 현황을 함께 검토합니다. 방향과 예상 비용, 일정부터 먼저 제시하고 시작합니다.",
  },
  {
    no: "03",
    title: "실행과 사후관리",
    desc: "반려 없이 완료하는 것은 기본. 이후 연말결산·실태조사 일정까지 기록으로 챙깁니다.",
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ───────────────────────────────── */}
      <section className="relative overflow-hidden bg-navy-deep text-white">
        <Image
          src="/images/hero-site.jpg"
          alt="도시 건설 현장"
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/30" />
        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-24 md:px-6 md:pb-28 md:pt-36">
          <div className="max-w-3xl">
            <p className="anim-fade-up text-[12px] font-bold tracking-[0.22em] text-brass">
              건설 경영 전문 자문 · 실무 경력 17년
            </p>
            <h1 className="anim-fade-up anim-delay-1 font-display mt-6 text-[34px] font-black leading-[1.28] tracking-tight md:text-[54px]">
              건설사의 모든 결정에,
              <br />
              17년 실무가 함께합니다
            </h1>
            <p className="anim-fade-up anim-delay-2 mt-6 max-w-2xl text-[15px] leading-relaxed text-white/75 md:text-[17px]">
              면허 등록 · 기업진단 · 양도양수 · 연말결산. 건설사를 운영하는 한
              반복되는 경영 업무 전체를, 광고 상담원이 아니라 실무 담당자가
              처음부터 끝까지 책임집니다.
            </p>
            <div className="anim-fade-up anim-delay-3 mt-10 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="h-13 bg-brass px-9 text-[16px] text-navy-deep hover:bg-brass/85" asChild>
                <a href="#inquiry">
                  전문 자문 문의하기 <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-13 border-white/25 bg-transparent px-9 text-[16px] text-white hover:bg-white/10 hover:text-white"
                asChild
              >
                <a href="#services">자문 영역 보기</a>
              </Button>
            </div>
          </div>
        </div>
        {/* Fact strip */}
        <div className="relative border-t border-white/10 bg-navy/70 backdrop-blur">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 md:grid-cols-4">
            {[
              { n: 17, suffix: "년", label: "건설 행정·경영 실무" },
              { n: 6, suffix: "개", label: "전문 자문 영역" },
              { n: 25, suffix: "종", label: "면허 등록기준표 공개" },
              { n: 1, suffix: "일", label: "영업일 내 회신 원칙" },
            ].map((s) => (
              <div key={s.label} className="px-4 py-6 text-center md:py-7">
                <p className="font-display text-[26px] font-bold text-brass md:text-[30px]">
                  <CountUp to={s.n} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-[11.5px] font-semibold text-white/60 md:text-[12.5px]">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Org marquee ──────────────────────── */}
      <OrgMarquee />

      {/* ── 자문 영역 (대장) ─────────────────── */}
      <section id="services" className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-[12px] font-bold tracking-[0.22em] text-brass">
                ADVISORY SERVICES
              </p>
              <h2 className="font-display mt-3 text-[28px] font-black tracking-tight md:text-[38px]">
                무엇을 맡길 수 있습니까
              </h2>
            </div>
            <p className="max-w-sm text-[13px] leading-relaxed text-muted-foreground">
              면허의 생애주기 전체 — 세우고, 유지하고, 넘기고, 증명하는 모든
              순간이 자문 영역입니다.
            </p>
          </div>
        </Reveal>
        <div className="mt-12 border-b border-border">
          {SERVICES.map((s, i) => (
            <Reveal key={s.no} delay={Math.min(i * 60, 180)}>
              <Link
                href="/services"
                className="group grid grid-cols-[52px_1fr] items-baseline gap-4 border-t border-border py-7 transition-colors hover:bg-card md:grid-cols-[72px_minmax(0,280px)_1fr_auto] md:gap-8 md:px-4"
              >
                <span className="font-display text-[15px] font-bold text-brass">
                  {s.no}
                </span>
                <h3 className="font-display text-[20px] font-bold leading-snug md:text-[23px]">
                  {s.title}
                </h3>
                <p className="col-start-2 mt-1.5 text-[13.5px] leading-relaxed text-muted-foreground md:col-start-3 md:mt-0">
                  {s.desc}
                </p>
                <span className="hidden items-center gap-3 whitespace-nowrap md:flex">
                  <span className="border border-border px-3 py-1.5 text-[11.5px] font-bold text-muted-foreground group-hover:border-brass/50 group-hover:text-foreground">
                    {s.meta}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-border transition-colors group-hover:text-brass" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── 원칙 (이미지 + 대장) ─────────────── */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-7xl gap-0 px-4 md:px-6 lg:grid-cols-[1.05fr_1fr]">
          <div className="relative min-h-[320px] overflow-hidden lg:min-h-0">
            <Image
              src="/images/community-table.jpg"
              alt="자문 미팅 — 도면과 서류를 함께 검토하는 장면"
              fill
              className="object-cover"
            />
          </div>
          <div className="px-0 py-14 md:py-20 lg:pl-14">
            <Reveal>
              <p className="text-[12px] font-bold tracking-[0.22em] text-brass">
                HOW WE WORK
              </p>
              <h2 className="font-display mt-3 text-[26px] font-black tracking-tight md:text-[34px]">
                서류가 아니라,
                <br />
                결과를 기준으로 일합니다
              </h2>
            </Reveal>
            <div className="mt-10">
              {PRINCIPLES.map((p, i) => (
                <Reveal key={p.title} delay={i * 100}>
                  <div className="border-t border-border py-6">
                    <div className="flex items-baseline gap-4">
                      <span className="font-display text-[14px] font-bold text-brass">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="text-[17px] font-extrabold">{p.title}</h3>
                        <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted-foreground">
                          {p.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Track record ─────────────────────── */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <Reveal>
            <p className="text-center text-[12px] font-bold tracking-[0.22em] text-brass">
              TRACK RECORD — 일이 쌓여 신뢰가 되었습니다
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              { n: 3200, suffix: "+", label: "누적 상담·업무 처리", sub: "등록·양도양수·진단·결산 전체" },
              { n: 1400, suffix: "+", label: "완료된 면허·거래 업무", sub: "반려 없이 끝까지 책임진 건" },
              { n: 180, suffix: "+", label: "장기 관리 중인 고객사", sub: "매년 연말을 함께 준비하는 회사들" },
            ].map((s, i) => (
              <Reveal key={s.label} delay={i * 120}>
                <div className="text-center">
                  <p className="font-display text-[40px] font-bold text-brass md:text-[48px]">
                    <CountUp to={s.n} suffix={s.suffix} />
                  </p>
                  <p className="mt-1 text-[15px] font-bold">{s.label}</p>
                  <p className="mt-1 text-[12px] text-white/50">{s.sub}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-center text-[11.5px] text-white/40">
            * 수치는 내부 업무 집계 기준이며, 정식 서비스 공개 시 검증을 거쳐 확정됩니다.
          </p>
        </div>
      </section>

      {/* ── Reviews marquee ──────────────────── */}
      <Reviews />

      {/* ── 진행 절차 ────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display text-[26px] font-black tracking-tight md:text-[36px]">
              자문은 이렇게 진행됩니다
            </h2>
            <p className="text-[13px] text-muted-foreground">
              어느 단계에서도 비용을 먼저 요구하지 않습니다.
            </p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {STEPS.map((s, i) => (
            <Reveal key={s.no} delay={i * 120}>
              <div className="border-t-2 border-navy pt-6">
                <p className="font-display text-[44px] font-black leading-none text-brass">
                  {s.no}
                </p>
                <h3 className="mt-4 text-[18px] font-extrabold">{s.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Expert inquiry ───────────────────── */}
      <section id="inquiry" className="bg-secondary/60">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 md:px-6 md:py-28 lg:grid-cols-[1fr_1.15fr]">
          <Reveal>
            <div className="relative overflow-hidden border border-border">
              <Image
                src="/images/expert-desk.jpg"
                alt="전문가의 실무 검토"
                width={720}
                height={640}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-6 border-l-4 border-brass bg-card p-6">
              <p className="text-[16px] font-extrabold">
                광고 상담원이 아니라, 실무 담당자가 직접 답합니다
              </p>
              <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">
                17년 동안 면허 등록·기업진단·양도양수 현장을 지킨 경험으로, 내
                상황에 맞는 답을 드립니다. 간단한 기준 질문은 화면 오른쪽 아래의
                AI 도우미에게 바로 물어보셔도 됩니다.
              </p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="mb-6">
              <p className="text-[12px] font-bold tracking-[0.22em] text-brass">
                EXPERT DESK
              </p>
              <h2 className="font-display mt-3 text-[26px] font-black tracking-tight md:text-[34px]">
                17년 경력 전문가에게 바로 물어보세요
              </h2>
              <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">
                면허 설립부터 기업진단, 연말 잔고증명, 기능사 자격까지. 문의는
                즉시 담당자 메일로 전달되고, 영업일 기준 하루 안에 회신드립니다.
              </p>
            </div>
            <InquiryForm />
          </Reveal>
        </div>
      </section>

      {/* ── Newsletter ───────────────────────── */}
      <section id="newsletter" className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
        <Reveal>
          <div className="border border-border bg-card p-8 md:p-14">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
              <div>
                <p className="text-[12px] font-bold tracking-[0.22em] text-brass">
                  NEWSLETTER
                </p>
                <h2 className="font-display mt-3 text-[26px] font-black tracking-tight md:text-[32px]">
                  매주 월요일, 건설 경영에 꼭 필요한 것만
                </h2>
                <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">
                  면허 제도 변경 · 실태조사 대비 · 양도양수 시세를 5분 분량으로
                  요약해 보내드립니다. 구독은 무료입니다.
                </p>
              </div>
              <NewsletterForm />
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Community (하단, 가격 비공개) ────── */}
      <section className="border-t border-brass/40 bg-navy-deep text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <Reveal>
              <p className="text-[12px] font-bold tracking-[0.22em] text-brass">
                THE CLUB
              </p>
              <h2 className="font-display mt-3 text-[24px] font-black tracking-tight md:text-[32px]">
                혼자 결정하지 않아도 되는 서클, 로열빌더스클럽
              </h2>
              <p className="mt-3 max-w-2xl text-[13.5px] leading-relaxed text-white/60">
                자문 고객사들이 먼저 만들어 달라고 한 공간입니다. 검증된 건설사
                대표·실무자들이 협업과 양도양수 매물, 수주 물량을 나눕니다.
                가입은 심사 승인제로 운영되며, 자세한 조건은 문의 시 안내드립니다.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <Button size="lg" variant="outline" className="border-white/25 bg-transparent px-7 text-white hover:bg-white/10 hover:text-white" asChild>
                  <Link href="/community">커뮤니티 소개 보기</Link>
                </Button>
                <Button size="lg" className="bg-brass px-7 text-navy-deep hover:bg-brass/85" asChild>
                  <a href="#inquiry">가입 문의하기</a>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
