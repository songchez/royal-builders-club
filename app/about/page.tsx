import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ShieldCheck,
  FileCheck2,
  History,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal, CountUp } from "@/components/reveal";

export const metadata: Metadata = {
  title: "소개 · 문의",
  description:
    "로열빌더스클럽코리아 — 17년 경력의 건설 경영 전문가 그룹과 건설사 멤버십 커뮤니티.",
};

const PRINCIPLES = [
  {
    icon: FileCheck2,
    title: "한 번에, 끝까지",
    desc: "서류 반려로 고객이 시간을 잃는 것만큼 큰 손실은 없습니다. 접수 전 사전 검토로 반려 없는 완료를 만듭니다.",
  },
  {
    icon: ShieldCheck,
    title: "투명한 비용",
    desc: "시작할 때 보여드린 수수료에서 중간에 말이 바뀌는 일은 없습니다. 추가 비용이 생기면 그 전에 먼저 말씀드립니다.",
  },
  {
    icon: History,
    title: "기록이 남는 관리",
    desc: "등록으로 끝나지 않습니다. 기준일, 결산, 실태조사 일정까지 기록으로 관리해 다음 위기를 미리 막습니다.",
  },
];

const WORKS = [
  "신규·추가 등록",
  "양도 · 양수 중개",
  "기업진단 · 실태조사",
  "분할 · 합병",
  "연말결산 · 잔고증명",
  "기술인력 · 자격",
  "실적신고 · 사업관리",
  "규제 대응 자문",
];

const HISTORY = [
  { year: "2009", text: "건설 행정 실무로 첫발 — 면허 등록·관리 업무 시작" },
  { year: "2013", text: "양도양수·분할합병 업무 확대, 건설법인 구조개편 자문 본격화" },
  { year: "2017", text: "기업진단·연말결산 정기 관리 고객사 체계 구축" },
  { year: "2021", text: "전문건설업 개편 대응 — 전환·등록 문의 대량 처리" },
  { year: "2024", text: "안전 규제 강화 대비 실태조사·준법 관리 서비스 신설" },
  { year: "2026", text: "로열빌더스클럽 창립 — 검증된 건설사 멤버십 커뮤니티 오픈" },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy-deep text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
          <Badge className="border-brass/40 bg-brass/15 text-brass hover:bg-brass/20">
            ABOUT US
          </Badge>
          <h1 className="font-display mt-5 max-w-3xl text-[30px] font-black leading-[1.25] tracking-tight md:text-[42px]">
            17년, 건설업 한 길.
            <br />
            이제는 함께 가는 서클을 엽니다.
          </h1>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-white/70 md:text-[16px]">
            면허 등록 현장에서 시작해 양도양수·기업진단·연말결산까지, 건설사
            곁에서 17년을 일했습니다. 그 경험 위에 검증된 건설사들의 커뮤니티,
            로열빌더스클럽을 세웠습니다.
          </p>
        </div>
      </section>

      {/* ── 회사 소개 ── */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <p className="text-[13px] font-bold tracking-[0.18em] text-brass">
              THE COMPANY
            </p>
            <h2 className="mt-3 text-[26px] font-extrabold tracking-tight md:text-[34px]">
              우리는 무슨 일을 하는가
            </h2>
            <div className="mt-6 space-y-4 text-[14.5px] leading-relaxed text-muted-foreground">
              <p>
                로열빌더스클럽코리아는 건설사의 <strong className="text-foreground">
                면허 생애주기 전체</strong>를 다루는 전문가 그룹입니다. 면허를 새로
                세우고, 요건을 유지하고, 키우거나 넘기고, 연말마다 기준을
                증명하는 일 — 건설사를 운영하는 한 반복되는 모든 행정·재무
                업무를 대신합니다.
              </p>
              <p>
                이 업계에서 17년은 단순히 오래됐다는 뜻이 아닙니다. 자본금 기준이
                바뀌고, 전문건설업이 개편되고, 안전 제재가 강화되는 동안 매번
                현장에서 대응해 왔다는 뜻입니다. 제도가 바뀌면 가장 먼저
                정리해서 알려드리고, 위기가 오면 남들보다 하루 먼저 준비시켜
                드리는 것이 우리의 일입니다.
              </p>
              <p>
                그리고 이 모든 과정에서 한 가지를 확인했습니다. 건설사 사장님은
                실력은 있어도 <strong className="text-foreground">상의할 상대가
                없다</strong>는 것. 그래서 커뮤니티를 만들었습니다.
              </p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="border border-border bg-card p-8">
              <p className="text-[15px] font-extrabold">업무 영역 한눈에</p>
              <div className="mt-5 grid grid-cols-2 gap-2.5">
                {WORKS.map((w) => (
                  <div
                    key={w}
                    className="border border-border bg-background px-4 py-3 text-[13px] font-bold"
                  >
                    {w}
                  </div>
                ))}
              </div>
              <div className="mt-6 border-l-4 border-brass bg-secondary/60 p-5">
                <p className="text-[13.5px] leading-relaxed">
                  “싸게 빨리”를 약속하지 않습니다. 대신{" "}
                  <strong>반려 없이 한 번에, 비용은 처음 그대로</strong>를
                  약속합니다. 17년 동안 이 약속으로 유지된 회사입니다.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Principles */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
              <div className="h-full border border-border bg-card p-7">
                <p.icon className="h-7 w-7 text-brass" />
                <h3 className="mt-4 text-[16.5px] font-bold">{p.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── 클럽 소개 ── */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
            <Reveal>
              <p className="text-[13px] font-bold tracking-[0.18em] text-brass">
                THE CLUB
              </p>
              <h2 className="mt-3 text-[26px] font-extrabold tracking-tight md:text-[34px]">
                로열빌더스클럽은
                <br />
                왜 만들어졌나
              </h2>
              <div className="mt-6 space-y-4 text-[14.5px] leading-relaxed text-white/70">
                <p>
                  17년 동안 수없이 같은 장면을 봤습니다. 괜찮은 양도 매물이
                  브로커 손을 거치며 값이 부풀고, 급한 하청 물량이 헐값에
                  넘어가고, 제도 변경을 늦게 알아 영업정지 위기에 몰리는
                  사장님들. 정보는 늘 <em>아는 사람</em>에게만 먼저 갔습니다.
                </p>
                <p>
                  로열빌더스클럽은 그 <strong className="text-white">
                  &quot;아는 사람&quot;을 모든 회원에게 만들어주는 서클</strong>입니다.
                  실명·면허 검증이 끝난 건설사 대표와 실무자만 입장하며, 안에서
                  협업 제안과 비공개 매물, 수주 물량이 오갑니다.
                </p>
                <p>
                  연회비는 입장료이자 약속입니다. 아무나 들어올 수 없기에 서클의
                  품질이 유지되고, 그 품질이 다시 회원의 이익이 됩니다.
                </p>
              </div>
              <Button
                size="lg"
                className="mt-8 bg-brass px-8 text-navy-deep hover:bg-brass/85"
                asChild
              >
                <Link href="/community">
                  커뮤니티 자세히 보기 <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </Reveal>
            <Reveal delay={150}>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { n: 4, s: "", label: "거래 기둥", d: "협업 · 양도양수 · 하청 수주 · 인사이트" },
                  { n: 12, s: "회/년", label: "오프라인 정모", d: "규제 브리핑 + 네트워킹" },
                  { n: 100, s: "%", label: "심사 승인제", d: "검증된 회원만 입장" },
                  { n: 17, s: "년", label: "운영진 경력", d: "전문가가 직접 관리하는 서클" },
                ].map((c) => (
                  <div key={c.label} className="border border-white/15 bg-white/5 p-7">
                    <p className="text-[34px] font-extrabold text-brass">
                      <CountUp to={c.n} suffix={c.s} />
                    </p>
                    <p className="mt-1 text-[14.5px] font-bold">{c.label}</p>
                    <p className="mt-1 text-[12px] text-white/50">{c.d}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 걸어온 길 ── */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
        <Reveal>
          <p className="text-[13px] font-bold tracking-[0.18em] text-brass">
            MILESTONES
          </p>
          <h2 className="mt-3 text-[26px] font-extrabold tracking-tight md:text-[34px]">
            걸어온 길
          </h2>
        </Reveal>
        <div className="mt-10 space-y-0 border-l-2 border-border pl-6 md:pl-10">
          {HISTORY.map((h, i) => (
            <Reveal key={h.year} delay={i * 80}>
              <div className="relative pb-8">
                <span className="absolute -left-[31px] top-1 h-3 w-3 bg-brass md:-left-[47px]" />
                <p className="text-[15px] font-extrabold text-primary">{h.year}</p>
                <p className="mt-1 text-[13.5px] text-muted-foreground">{h.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="bg-secondary/60">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="border border-border bg-card p-6">
              <Phone className="h-6 w-6 text-brass" />
              <p className="mt-3 text-[13px] font-bold text-muted-foreground">전화 상담</p>
              <a href="tel:000-0000-0000" className="mt-1 block text-[16px] font-extrabold">
                000-0000-0000
              </a>
              <p className="mt-1 text-[12px] text-muted-foreground">평일 09:00 ~ 18:00</p>
            </div>
            <div className="border border-border bg-card p-6">
              <Mail className="h-6 w-6 text-brass" />
              <p className="mt-3 text-[13px] font-bold text-muted-foreground">이메일</p>
              <a href="mailto:hello@royalbuildersclub.kr" className="mt-1 block break-all text-[15px] font-extrabold">
                hello@royalbuildersclub.kr
              </a>
            </div>
            <div className="border border-border bg-card p-6">
              <MapPin className="h-6 w-6 text-brass" />
              <p className="mt-3 text-[13px] font-bold text-muted-foreground">오프라인 미팅</p>
              <p className="mt-1 text-[15px] font-extrabold">인천 · 서울 거점</p>
              <p className="mt-1 text-[12px] text-muted-foreground">정모 장소는 멤버에게 안내</p>
            </div>
          </div>
          <div className="mt-10 border border-border bg-navy p-8 text-center text-white md:p-10">
            <p className="text-[18px] font-extrabold">
              좋은 동료 하나가, 좋은 수주 하나보다 낫습니다.
            </p>
            <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
              <Button size="lg" className="bg-brass px-8 text-navy-deep hover:bg-brass/85" asChild>
                <Link href="/community#join">
                  커뮤니티 가입 신청 <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white"
                asChild
              >
                <a href="/#inquiry">전문가에게 문의하기</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
