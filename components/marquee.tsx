const ORGS = [
  { name: "국토교통부", href: "http://www.molit.go.kr" },
  { name: "대한건설협회", href: "http://www.cak.or.kr" },
  { name: "대한전문건설협회", href: "https://www.kosca.or.kr" },
  { name: "대한주택건설협회", href: "https://www.khba.or.kr" },
  { name: "한국전기공사협회", href: "https://www.keca.or.kr" },
  { name: "한국정보통신공사협회", href: "https://www.kica.or.kr" },
  { name: "한국소방시설협회", href: "https://www.ekffa.or.kr" },
  { name: "한국건설기술인협회", href: "https://www.kocea.or.kr" },
  { name: "건설공제조합", href: "https://www.cgbest.co.kr" },
  { name: "전문건설공제조합", href: "https://www.kscfc.co.kr" },
  { name: "기계설비건설공제조합", href: "http://www.seolbi.com" },
  { name: "전기공사공제조합", href: "https://www.ecfc.co.kr" },
  { name: "정보통신공제조합", href: "https://www.icfc.or.kr" },
  { name: "소방산업공제조합", href: "http://www.figu.or.kr" },
  { name: "건설산업정보원 KISCON", href: "https://www.kiscon.net" },
  { name: "인터넷등기소", href: "http://www.iros.go.kr" },
];

export function OrgMarquee() {
  const items = [...ORGS, ...ORGS];
  return (
    <section className="border-y border-border bg-card py-6">
      <p className="mb-4 text-center text-[11.5px] font-bold tracking-[0.2em] text-muted-foreground">
        관련 기관 · 협회 · 조합 바로가기
      </p>
      <div className="overflow-hidden">
        <div className="marquee-track items-center gap-0">
          {items.map((o, i) => (
            <span key={i} className="flex items-center">
              <a
                href={o.href}
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap px-7 text-[14px] font-bold text-muted-foreground transition-colors hover:text-brass"
              >
                {o.name}
              </a>
              <span className="h-1.5 w-1.5 rotate-45 bg-brass/50" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
