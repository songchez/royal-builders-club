import type { Metadata } from "next";
import Link from "next/link";
import {
  Handshake,
  Building2,
  FileSearch,
  Newspaper,
  MessagesSquare,
  Users,
  CalendarDays,
  Lock,
  Check,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { JoinForm } from "@/components/join-form";

export const metadata: Metadata = {
  title: "커뮤니티 · 멤버십",
  description:
    "검증된 건설사만 입장하는 연회비 멤버십 커뮤니티. 협업·양도양수·하청 수주가 오갑니다.",
};

const BENEFITS = [
  {
    icon: MessagesSquare,
    title: "온라인 커뮤니티 (카카오톡)",
    desc: "업종·주제별 프라이빗 라운지에서 실시간으로 협업 제안, 매물, 물량이 오갑니다.",
  },
  {
    icon: Users,
    title: "회원 디렉토리",
    desc: "누가 어떤 면허와 실적을 가졌는지 한눈에. 먼저 손 내밀 수 있습니다.",
  },
  {
    icon: CalendarDays,
    title: "오프라인 정모",
    desc: "월 1회 규제 브리핑 + 네트워킹. 얼굴을 본 사이에서만 가능한 대화가 있습니다.",
  },
  {
    icon: Newspaper,
    title: "멤버 전용 인사이트",
    desc: "양도양수 시세, 입찰 동향, 제도 변경 속보를 멤버에게 먼저 보냅니다.",
  },
];

const CHANNELS = [
  "협업·공동도급 라운지",
  "양도양수 매물 라운지 (비공개)",
  "하청 수주·물량 라운지",
  "규제·제도 속보 라운지",
  "지역 챕터 라운지 (인천·서울 등)",
];

const FAQ = [
  {
    q: "왜 가입 심사를 하나요?",
    a: "실명·소속사가 확인된 분만 입장해야 거래 대화가 안전하게 오갈 수 있기 때문입니다. 신청 시 회사·면허 정보를 검토하며, 브로커·광고 목적 가입은 거절될 수 있습니다.",
  },
  {
    q: "연회비 외에 추가 비용이 있나요?",
    a: "게시판 이용, 정모 참석 등 커뮤니티 활동 자체에는 추가 비용이 없습니다. 다만 양도양수 성사 중개, 기업진단 등 전문가 업무를 별도로 의뢰하시면 수수료가 발생하며, 회원은 할인됩니다.",
  },
  {
    q: "커뮤니티는 어떤 방식으로 운영되나요?",
    a: "카카오톡 오픈채팅 기반의 프라이빗 라운지로 운영됩니다. 운영진이 상주하며 공지·매물을 관리하고, 허위 매물·스팸은 경고 후 퇴출하는 규칙을 적용합니다.",
  },
  {
    q: "중도 해지 시 환불이 되나요?",
    a: "이용약관에 따라 잔여 기간 기준 환불 규정을 적용합니다. 상세 조건은 이용약관 페이지를 확인해 주세요.",
  },
];

export default function CommunityPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-deep text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
          <Badge className="border-brass/40 bg-brass/15 text-brass hover:bg-brass/20">
            <Lock className="mr-1 h-3 w-3" /> CLOSED MEMBERSHIP
          </Badge>
          <h1 className="font-display mt-5 max-w-3xl text-[30px] font-black leading-[1.25] tracking-tight md:text-[42px]">
            짓는 사람들의 프라이빗 서클
          </h1>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-white/70 md:text-[16px]">
            로열빌더스클럽은 아무나 들어올 수 없는 서클입니다. 그래서 안에서는
            브로커 없이, 눈치 보지 않고, 진짜 사업 이야기가 오갑니다.
          </p>
          <Button
            size="lg"
            className="mt-8 h-13 bg-brass px-8 text-[16px] text-navy-deep hover:bg-brass/85"
            asChild
          >
            <Link href="#join">가입 신청하기</Link>
          </Button>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <h2 className="text-[24px] font-extrabold tracking-tight md:text-[30px]">
          멤버가 되면 생기는 것들
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {BENEFITS.map((b) => (
            <div
              key={b.title}
              className="flex gap-5 border border-border bg-card p-7"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-primary text-brass">
                <b.icon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-[16.5px] font-bold">{b.title}</h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted-foreground">
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Channels */}
      <section className="bg-secondary/60">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="text-[13px] font-bold tracking-[0.18em] text-brass">
                KAKAO ROOMS
              </p>
              <h2 className="mt-3 text-[24px] font-extrabold tracking-tight md:text-[30px]">
                목적별로 나뉜 프라이빗 라운지
              </h2>
              <p className="mt-4 text-[14px] leading-relaxed text-muted-foreground">
                가입 승인 후 안내되는 카카오톡 링크로 입장합니다. 라운지마다
                운영진이 상주하며, 매물·공고는 검증 템플릿으로만 등록됩니다.
              </p>
            </div>
            <div className="border border-border bg-card p-6">
              <ul className="space-y-3">
                {CHANNELS.map((c) => (
                  <li key={c} className="flex items-center gap-3 text-[14px] font-semibold">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent text-brass-foreground">
                      <Check className="h-4 w-4" />
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ground rules */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <h2 className="text-[24px] font-extrabold tracking-tight md:text-[30px]">
          이 서클의 약속
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            {
              icon: Building2,
              t: "실명 · 실매물",
              d: "익명 금지. 매물은 검증 템플릿으로만 등록하며 허위 등록 시 퇴출됩니다.",
            },
            {
              icon: Handshake,
              t: "직거래 존중",
              d: "회원 간 직거래를 막지 않습니다. 대신 계약서 검토·중개 안전장치는 클럽이 지원합니다.",
            },
            {
              icon: FileSearch,
              t: "운영진이 상주",
              d: "총무가 매일 라운지를 관리합니다. 광고·스팸은 경고 2회 후 퇴출입니다.",
            },
          ].map((r) => (
            <div key={r.t} className="border border-border bg-card p-7">
              <r.icon className="h-7 w-7 text-brass" />
              <h3 className="mt-4 text-[16px] font-bold">{r.t}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
                {r.d}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Join form */}
      <section className="bg-secondary/60">
        <div className="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-20">
          <JoinForm />
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-20">
        <h2 className="text-[24px] font-extrabold tracking-tight md:text-[30px]">
          자주 묻는 질문
        </h2>
        <Accordion type="single" collapsible className="mt-8">
          {FAQ.map((f, i) => (
            <AccordionItem key={f.q} value={`faq-${i}`}>
              <AccordionTrigger className="text-[15px] font-bold">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-[13.5px] leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </>
  );
}
