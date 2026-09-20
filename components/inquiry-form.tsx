"use client";

import { useState } from "react";
import { Building2, Wallet, BadgeCheck, MoreHorizontal, FileSearch } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const TOPICS = [
  {
    id: "license",
    icon: Building2,
    label: "면허 설립 · 등록",
    hint: "신규 면허, 추가 등록 조건",
  },
  {
    id: "diagnosis",
    icon: FileSearch,
    label: "기업진단 · 실태조사",
    hint: "진단보고서, 실질자본금, 통보 대응",
  },
  {
    id: "balance",
    icon: Wallet,
    label: "연말결산 · 잔고증명",
    hint: "잔고증명, 자본 구성, 일정 관리",
  },
  {
    id: "craft",
    icon: BadgeCheck,
    label: "기능사 · 자격 문의",
    hint: "기술인력 자격, 인정 종목",
  },
  {
    id: "etc",
    icon: MoreHorizontal,
    label: "그 외 · 커뮤니티 가입",
    hint: "양도양수, 멤버십, 기타",
  },
];

export function InquiryForm() {
  const [topic, setTopic] = useState("license");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle"
  );

  async function submit() {
    if (!name || !contact || !message || !agreed) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic, name, contact, message }),
      });
      if (!res.ok) throw new Error("inquiry failed");
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="border border-brass/50 bg-brass/10 px-6 py-12 text-center">
        <p className="text-[18px] font-extrabold text-brass-foreground">
          문의가 접수되었습니다 ✓
        </p>
        <p className="mx-auto mt-3 max-w-md text-[13.5px] leading-relaxed text-muted-foreground">
          담당 전문가가 내용을 확인한 뒤 영업일 기준 하루 안에 전화 또는
          이메일로 회신드립니다.
        </p>
      </div>
    );
  }

  return (
    <div className="border border-border bg-card p-6 md:p-8">
      <p className="text-[15px] font-extrabold">무엇이 필요하신가요?</p>
      <p className="mt-1 text-[12.5px] text-muted-foreground">
        주제를 고르고 상황을 남겨주시면, 17년 경력 전문가가 직접 답합니다.
      </p>

      <div className="mt-5 flex flex-col gap-2">
        {TOPICS.map((t) => {
          const active = topic === t.id;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => setTopic(t.id)}
              className={`flex w-full items-center gap-4 border px-5 py-3.5 text-left transition-colors ${
                active
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background hover:border-primary/40"
              }`}
            >
              <t.icon className="h-5 w-5 shrink-0 text-brass" />
              <span className="text-[14px] font-bold">{t.label}</span>
              <span
                className={`ml-auto hidden text-[11.5px] sm:block ${
                  active ? "text-primary-foreground/70" : "text-muted-foreground"
                }`}
              >
                {t.hint}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-2">
        <Input
          placeholder="성함 *"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="h-12"
        />
        <Input
          placeholder="연락처 * (010-0000-0000)"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          className="h-12"
        />
      </div>
      <Textarea
        placeholder={"상황을 편하게 적어주세요. *\n예) 실내건축 면허를 새로 만들려고 하는데 자본금이 부족한 상태입니다."}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="mt-3 min-h-28 resize-none"
      />

      <label className="mt-4 flex items-start gap-2 text-[12px] text-muted-foreground">
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="mt-0.5 h-4 w-4 accent-primary"
        />
        <span>
          [필수] 문의 처리를 위한 개인정보 수집·이용에 동의합니다. (수집 항목:
          성함, 연락처, 문의 내용 / 보유 기간: 상담 종료 후 1년)
        </span>
      </label>

      {status === "error" && (
        <p className="mt-3 text-[12.5px] font-semibold text-destructive">
          성함·연락처·문의 내용을 입력하고 개인정보 수집에 동의해 주세요.
        </p>
      )}

      <div className="mt-6 flex flex-col items-start gap-3 md:flex-row md:items-center md:justify-between">
        <p className="text-[12px] text-muted-foreground">
          접수 즉시 담당자 메일로 전달됩니다 · 영업일 기준 하루 내 회신
        </p>
        <Button
          size="lg"
          className="w-full px-10 md:w-auto"
          onClick={submit}
          disabled={status === "loading"}
        >
          {status === "loading" ? "접수 중…" : "전문가에게 문의하기"}
        </Button>
      </div>
    </div>
  );
}
