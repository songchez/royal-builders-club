import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getStandard, getStandards } from "@/lib/content";

export function generateStaticParams() {
  return getStandards().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = await getStandard(slug);
  if (!s) return {};
  return {
    title: `${s.name} 등록기준`,
    description: `${s.name} — 자본금·기술인력·공제조합 등록기준 상세 안내`,
  };
}

export default async function StandardDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = await getStandard(slug);
  if (!s || !s.contentHtml) notFound();

  const rows: [string, string][] = [
    ["자본금 (법인)", s.capitalCorp],
    ...(s.capitalPersonal ? ([["자본금 (개인)", s.capitalPersonal]] as [string, string][]) : []),
    ["공제조합·보증", s.coop],
    ["기술인력", s.tech],
    ["사무실", s.office],
  ];

  return (
    <>
      <section className="bg-navy-deep text-white">
        <div className="mx-auto max-w-5xl px-4 py-14 md:px-6 md:py-18">
          <Link
            href="/insight"
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-white/60 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> 인사이트 · 등록기준 전체보기
          </Link>
          <p className="mt-6 text-[13px] font-bold tracking-[0.15em] text-brass">
            {s.group}
          </p>
          <h1 className="mt-2 text-[30px] font-extrabold tracking-tight md:text-[42px]">
            {s.name}
          </h1>
          <p className="mt-4 text-[12.5px] text-white/50">
            기준 갱신일 {s.updated} · 출처: {s.source}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14 md:px-6">
        {/* 기준 요약 카드 */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {rows.map(([k, v]) => (
            <div key={k} className="border border-border bg-card p-5">
              <p className="text-[11.5px] font-bold tracking-wide text-muted-foreground">
                {k}
              </p>
              <p className="mt-1.5 text-[15px] font-extrabold leading-snug">{v}</p>
            </div>
          ))}
        </div>

        {/* 본문 */}
        <div
          className="md-body mt-10"
          dangerouslySetInnerHTML={{ __html: s.contentHtml }}
        />

        {/* CTA */}
        <div className="mt-12 flex flex-col justify-between gap-6 border border-border bg-card p-8 md:flex-row md:items-center">
          <div>
            <p className="text-[17px] font-extrabold">
              내 조건으로 가능한지, 지금 확인해 보세요
            </p>
            <p className="mt-1.5 text-[13px] text-muted-foreground">
              자본금·기술인력 충족 여부와 부족한 요건을 전문가가 직접 판단해
              드립니다. 간단한 기준 질문은 AI 도우미에게 바로 물어보실 수도 있습니다.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <a href="/#inquiry">
                전문가 문의 <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/community#join">멤버십 가입 신청</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
