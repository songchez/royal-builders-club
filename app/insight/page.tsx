import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Lock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getStandards } from "@/lib/content";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "인사이트 · 등록기준",
  description:
    "종합·전문건설업과 전기·정보통신·소방, 주택·산림사업까지 — 면허별 최신 등록기준 정리.",
};

const GROUPS = [
  "종합건설업",
  "전문건설업",
  "전기·정보통신·소방",
  "주택·기타 인허가",
];

export default function InsightPage() {
  const standards = getStandards();

  return (
    <>
      <section className="bg-navy-deep text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
          <Badge className="border-brass/40 bg-brass/15 text-brass hover:bg-brass/20">
            INSIGHT · 등록기준 데이터베이스
          </Badge>
          <h1 className="font-display mt-5 max-w-3xl text-[30px] font-black leading-[1.25] tracking-tight md:text-[42px]">
            면허별 등록기준,
            <br />
            한곳에 정리했습니다
          </h1>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-white/70 md:text-[16px]">
            종합·전문건설업 {`20`}개 업종과 전기·정보통신·소방, 주택·산림사업까지{" "}
            <strong className="text-brass">{standards.length}개 면허</strong>의
            자본금·기술인력·공제조합 요건을 담았습니다. 문서는 마크다운 정적
            콘텐츠로 관리되어 언제든 최신 기준으로 갱신됩니다.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-[12px] text-white/50">
            <span className="border border-white/15 px-3 py-1">기준일 2026-09-20</span>
            <span className="border border-white/15 px-3 py-1">출처 병기</span>
            <span className="border border-white/15 px-3 py-1">개정 시 갱신</span>
          </div>
        </div>
      </section>

      {/* Group nav */}
      <div className="sticky top-16 z-30 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4 py-2.5 md:px-6">
          {GROUPS.map((g) => (
            <a
              key={g}
              href={`#group-${GROUPS.indexOf(g)}`}
              className="whitespace-nowrap px-3.5 py-1.5 text-[13px] font-bold text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
            >
              {g}
            </a>
          ))}
        </div>
      </div>

      {GROUPS.map((group, gi) => {
        const items = standards.filter((s) => s.group === group);
        return (
          <section key={group} id={`group-${gi}`} className="mx-auto max-w-7xl px-4 py-14 md:px-6">
            <Reveal>
              <div className="flex items-baseline justify-between border-b-2 border-foreground pb-3">
                <h2 className="text-[22px] font-extrabold tracking-tight md:text-[28px]">
                  {group}{" "}
                  <span className="ml-2 text-[14px] font-bold text-brass">
                    {items.length}개
                  </span>
                </h2>
                <p className="hidden text-[12px] text-muted-foreground md:block">
                  카드를 누르면 상세 기준을 볼 수 있습니다
                </p>
              </div>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((s, i) => (
                <Reveal key={s.slug} delay={(i % 3) * 90}>
                  <Link
                    href={`/insight/${s.slug}`}
                    className="group flex h-full flex-col border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brass/60 hover:shadow-lg"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-[16.5px] font-extrabold leading-snug">
                        {s.name}
                      </h3>
                      <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-brass transition-transform group-hover:translate-x-1" />
                    </div>
                    <div className="mt-4 space-y-2 text-[13px]">
                      <p>
                        <span className="mr-2 inline-block w-16 font-bold text-muted-foreground">
                          자본금
                        </span>
                        <span className="font-semibold">{s.capitalCorp}</span>
                        {s.capitalPersonal ? (
                          <span className="text-muted-foreground">
                            {" "}
                            / 개인 {s.capitalPersonal}
                          </span>
                        ) : null}
                      </p>
                      <p className="line-clamp-2">
                        <span className="mr-2 inline-block w-16 font-bold text-muted-foreground">
                          기술인력
                        </span>
                        {s.tech}
                      </p>
                      <p className="line-clamp-2">
                        <span className="mr-2 inline-block w-16 font-bold text-muted-foreground">
                          공제조합
                        </span>
                        {s.coop}
                      </p>
                    </div>
                    <p className="mt-auto pt-4 text-[11px] text-muted-foreground">
                      갱신 {s.updated} · 출처 병기됨
                    </p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </section>
        );
      })}

      {/* Member gate CTA */}
      <section className="bg-secondary/60">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="flex flex-col items-start justify-between gap-6 border border-brass/40 bg-brass/10 p-8 md:flex-row md:items-center md:p-10">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-navy text-brass">
                <Lock className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[16.5px] font-extrabold">
                  내 조건에 맞는 판정, 양도양수 시세, 절차 체크리스트는 멤버 전용입니다
                </p>
                <p className="mt-1.5 text-[13.5px] text-muted-foreground">
                  인정 자격종목 전체 목록과 업종별 체크리스트는 커뮤니티에서
                  공유되며, 맞춤형 판정은 전문가 문의로 확인하실 수 있습니다.
                </p>
              </div>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/community#join">멤버십 가입 신청</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/#inquiry">전문가 문의</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
