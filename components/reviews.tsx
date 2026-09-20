import { Star } from "lucide-react";
import { Reveal } from "@/components/reveal";

const REVIEWS = [
  {
    tag: "신규 등록",
    name: "김○○ 대표",
    biz: "건축공사업 · 수도권",
    text: "저가 수수료 업체에 맡겼다가 보증조합 서류에서 반려돼 반년을 날렸습니다. 여기서는 반려 사유를 처음부터 걸러주셨고, 보완서류 들어온 것도 대신 처리해 주셨어요. 결국 등록 완료까지 3주. '싸게 빨리'보다 '한 번에 제대로'가 진짜라는 걸 배웠습니다.",
  },
  {
    tag: "연말 실태조사",
    name: "박○○ 대표",
    biz: "토건공사업 · 인천",
    text: "11월에 실질자본금 미달 안내문을 받고 눈앞이 캄캄했습니다. 전화드린 다음 날 바로 예비진단 일정을 잡아주시고, 결산 전에 자본 구성을 다시 짜주셨어요. 덕분에 시정명령 없이 넘겼습니다. 사장님들, 연말결산은 미루면 안 됩니다. 진작 맡길걸 그랬어요.",
  },
  {
    tag: "양도양수",
    name: "이○○ 대표",
    biz: "실내건축 매수 · 경기",
    text: "양수하면서 제일 무서운 게 숨은 채무잖아요. 부채 조사 체크리스트를 세 번이나 같이 검토해 주시고, 수수료 구조도 처음에 표로 딱 보여주셨어요. 중간에 말이 바뀌는 일이 없으니 믿고 갈 수 있었습니다. 커뮤니티에서 매물을 먼저 본 것도 운이 좋았고요.",
  },
  {
    tag: "기술인력",
    name: "정○○ 상무",
    biz: "전문건설 3개 면허 · 서울",
    text: "기능사 자격으로 기술인력 등록이 되는지, 상시 근무 요건은 어떻게 채우는지 몰라서 발만 구르고 있었습니다. 물어본 지 10분 만에 인정 종목 여부와 대안 인력 구성까지 정리해 주시더군요. 이런 건 검색으로는 절대 못 찾습니다.",
  },
  {
    tag: "양도양수",
    name: "최○○ 대표",
    biz: "전기공사업 매도 · 지방",
    text: "법인을 정리하려는데 시세를 몰라서 브로커 말만 믿을 뻔했습니다. 실적 연도별 합계와 시평액 기준으로 합리적인 가격을 잡아주시고, 매수자와의 조건 조율도 직접 맡아주셨어요. 양도가 늦어지면 좌수 유지 비용이 드는데 그 부분까지 챙겨주신 건 처음 봤습니다.",
  },
  {
    tag: "커뮤니티",
    name: "한○○ 대표",
    biz: "조경식재·시설물 · 인천",
    text: "정모에서 만난 종합 면허 사장님과 공동도급으로 공원 조성 사업을 같이 했습니다. 예전엔 일방적인 단가 인하 압박만 당했는데, 지금은 조건 맞는 물량을 골라서 받아요. 연회비가 아깝지 않냐고들 하시는데, 거래 한 건이면 몇 년 치가 나옵니다.",
  },
];

function ReviewCard({ r }: { r: (typeof REVIEWS)[number] }) {
  return (
    <article className="flex h-full w-[360px] shrink-0 flex-col border border-white/12 bg-white/5 p-7 transition-colors hover:border-brass/50 md:w-[400px]">
      <div className="flex items-center justify-between">
        <span className="bg-brass px-2.5 py-1 text-[11px] font-extrabold text-navy-deep">
          {r.tag}
        </span>
        <span className="flex gap-0.5 text-brass">
          {Array.from({ length: 5 }).map((_, s) => (
            <Star key={s} className="h-3.5 w-3.5 fill-brass" />
          ))}
        </span>
      </div>
      <p className="mt-5 flex-1 text-[13.5px] leading-relaxed text-white/80">
        “{r.text}”
      </p>
      <div className="mt-6 border-t border-white/10 pt-4">
        <p className="text-[13.5px] font-extrabold">{r.name}</p>
        <p className="mt-0.5 text-[11.5px] text-white/45">{r.biz}</p>
      </div>
    </article>
  );
}

export function Reviews() {
  const items = [...REVIEWS, ...REVIEWS];
  return (
    <section className="overflow-hidden bg-navy-deep py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-[13px] font-bold tracking-[0.18em] text-brass">
                REAL REVIEWS
              </p>
              <h2 className="mt-3 text-[26px] font-extrabold tracking-tight md:text-[36px]">
                고객들이 이렇게 말합니다
              </h2>
              <p className="mt-4 max-w-2xl text-[14px] leading-relaxed text-white/60">
                다들 자기가 잘한다고 합니다. 그래서 저희 말 대신, 실제로
                맡기셨던 분들이 남긴 이야기를 그대로 옮깁니다.
              </p>
            </div>
            <p className="hidden text-[12px] font-bold tracking-[0.15em] text-white/40 lg:block">
              마우스를 올리면 멈춥니다 →
            </p>
          </div>
        </Reveal>
      </div>

      {/* marquee */}
      <div className="relative mt-12">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-navy-deep to-transparent md:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-navy-deep to-transparent md:w-32" />
        <div className="overflow-hidden">
          <div className="marquee-track marquee-track-slow items-stretch gap-5 pr-5">
            {items.map((r, i) => (
              <div key={i} aria-hidden={i >= REVIEWS.length}>
                <ReviewCard r={r} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
