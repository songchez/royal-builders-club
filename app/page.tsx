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
    desc: "통보 받고 나서 움직이면 늦습니다. 실질자본금부터 미리 진단해서, 시정명령 없이 넘기게 합니다.",
    meta: "연말이 되기 전에",
  },
  {
    no: "02",
    title: "면허 등록 · 관리",
    desc: "새 면허, 추가 등록. 요건이 되는지 먼저 판단하고, 반려 없이 한 번에 등록합니다.",
    meta: "설립부터 상시",
  },
  {
    no: "03",
    title: "양도 · 양수",
    desc: "시세부터 숨은 부채까지 확인하고 팝니다, 삽니다. 브로커 없이, 조건이 맞을 때만.",
    meta: "비공개 매물",
  },
  {
    no: "04",
    title: "연말결산 · 잔고증명",
    desc: "12월에 준비하면 이미 늦습니다. 결산 전에 자본 구성을 점검해서 잔고증명에서 막히지 않게 합니다.",
    meta: "11월부터",
  },
  {
    no: "05",
    title: "기술인력 · 자격",
    desc: "이 자격이 인정되는지, 인력은 어떻게 채우는지. 기준표에 없는 사례까지 풀어본 경험으로 답합니다.",
    meta: "수시",
  },
  {
    no: "06",
    title: "규제 대응 · 제도 변경",
    desc: "시행령이 바뀌면 먼저 알려드립니다. 통보가 오면 바로 움직입니다.",
    meta: "통보 즉시",
  },
];

/* ── 자문 원칙 ─────────────────────────────────── */
const PRINCIPLES = [
  {
    title: "반려 없이, 한 번에",
    desc: "반려 사유는 내기 전에 걸러냅니다. 서류 때문에 잃는 반년은 되돌릴 수 없으니까요.",
  },
  {
    title: "비용은 처음 그대로",
    desc: "견적은 처음 한 번입니다. 중간에 말이 바뀌는 일은 없습니다.",
  },
  {
    title: "끝난 뒤가 더 중요합니다",
    desc: "등록과 진단이 끝나도 기준일·결산 일정을 기록으로 챙깁니다. 다음 연말이 편해집니다.",
  },
];

/* ── 진행 절차 ─────────────────────────────────── */
const STEPS = [
  {
    no: "01",
    title: "문의 접수",
    desc: "상황을 메일로 보내주세요. 영업일 하루 안에 담당 전문가가 직접 답합니다.",
  },
  {
    no: "02",
    title: "현황 진단",
    desc: "서류와 실제 현황을 같이 봅니다. 방향·비용·일정, 시작 전에 전부 말씀드립니다.",
  },
  {
    no: "03",
    title: "실행과 사후관리",
    desc: "반려 없이 끝냅니다. 그리고 다음 연말 일정까지 기록으로 챙깁니다.",
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ──────────────────────────────── */}
      <section className="relative overflow-hidden bg-navy-deep text-white">
        <Image
          src="/images/hero-city.jpg"
          alt="도심 속 유리 타워와 거리 전경"
          fill
          priority
          className="object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy-deep/45" />
        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-24 md:px-6 md:pb-28 md:pt-36">
          <div className="max-w-3xl">
            <p className="anim-fade-up text-[12px] font-bold tracking-[0.22em] text-brass">
              건설 행정 · 경영 자문 | 17년 경력 전문가
            </p>
            <h1 className="anim-fade-up anim-delay-1 font-display mt-6 text-[34px] font-black leading-[1.28] tracking-tight md:text-[54px]">
              건설사의 모든 결정에,
              <br />
              17년 경력 전문가가 함께합니다
            </h1>
            <p className="anim-fade-up anim-delay-2 mt-6 max-w-2xl text-[15px] leading-relaxed text-white/75 md:text-[17px]">
              면허를 세울지, 법인을 넘길지, 연말을 어떻게 넘길지. 17년
              현장에서 답해 온 전문가가 처음부터 끝까지 맡습니다.
            </p>
            <div className="anim-fade-up anim-delay-3 mt-10 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="h-13 bg-brass px-9 text-[16px] text-navy-deep hover:bg-brass/85" asChild>
                <a href="#inquiry">
                  지금 상황 물어보기 <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-13 border-white/25 bg-transparent px-9 text-[16px] text-white hover:bg-white/10 hover:text-white"
                asChild
              >
                <a href="#services">맡길 수 있는 일 보기</a>
              </Button>
            </div>
          </div>
        </div>
        {/* Fact strip */}
        <div className="relative border-t border-white/10 bg-navy/70 backdrop-blur">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 md:grid-cols-4">
            {[
              { n: 17, suffix: "년", label: "한 분야만 해온 경력" },
              { n: 6, suffix: "개", label: "자문 영역" },
              { n: 25, suffix: "종", label: "면허 기준표 공개" },
              { n: 1, suffix: "일", label: "영업일 내 회신" },
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
                맡기면 끝나는 일들
              </h2>
            </div>
            <p className="max-w-sm text-[13px] leading-relaxed text-muted-foreground">
              면허를 세우고, 유지하고, 넘기고, 증명하는 일. 건설사라면 매년
              반복되는 바로 그 일들입니다.
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
              src="/images/hero-meeting.jpg"
              alt="전문가와 고객사가 함께 검토하는 자문 미팅"
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
                결과로 말합니다
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
              TRACK RECORD — 숫자로 말합니다
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              { n: 3200, suffix: "+", label: "누적 상담 · 완료 업무", sub: "등록 · 진단 · 양도 · 결산 전부" },
              { n: 1400, suffix: "+", label: "반려 없이 끝낸 업무", sub: "처음 약속 그대로 끝냈습니다" },
              { n: 180, suffix: "+", label: "매년 함께 준비하는 고객사", sub: "연말마다 다시 찾는 회사들" },
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
            * 내부 업무 집계 기준이며, 정식 공개 시 검증을 거쳐 확정합니다.
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
              어떻게 진행되나
            </h2>
            <p className="text-[13px] text-muted-foreground">
              어느 단계에서도 먼저 비용을 요구하지 않습니다.
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
                alt="서류를 검토하는 전문가의 책상"
                width={720}
                height={640}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-6 border-l-4 border-brass bg-card p-6">
              <p className="text-[16px] font-extrabold">
                17년 경력 전문가가 직접 답합니다
              </p>
              <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">
                17년 동안 등록 · 진단 · 양도 현장을 지킨 사람이 봅니다. 간단한
                기준 질문은 오른쪽 아래 AI 도우미에게 바로 물으셔도 됩니다.
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
                면허 설립 · 기업진단 · 연말 잔고 · 기능사 자격. 무엇이든
                좋습니다. 메일로 보내주시면 담당자가 직접 답합니다.
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
                  월요일 아침, 5분만 빌립니다
                </h2>
                <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">
                  제도 변경 · 실태조사 대비 · 양도 시세. 한 주에 필요한 것만
                  요약합니다. 구독은 무료입니다.
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
                이 일, 같이 하는 사람들이 있습니다
              </h2>
              <p className="mt-3 max-w-2xl text-[13.5px] leading-relaxed text-white/60">
                자문을 받던 사장님들이 먼저 만들자고 한 모임입니다. 검증된
                건설사들끼리 협업과 매물, 수주 물량을 나눕니다. 가입은 심사제 —
                자세한 조건은 문의하시면 안내드립니다.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <Button size="lg" variant="outline" className="border-white/25 bg-transparent px-7 text-white hover:bg-white/10 hover:text-white" asChild>
                  <Link href="/community">커뮤니티 소개 보기</Link>
                </Button>
                <Button size="lg" className="bg-brass px-7 text-navy-deep hover:bg-brass/85" asChild>
                  <a href="#inquiry">가입 문의</a>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
