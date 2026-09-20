"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const PURPOSES = [
  { value: "collab", label: "B2B 협업 · 공동도급" },
  { value: "mna", label: "양도양수 (매수/매도)" },
  { value: "subcontract", label: "하청 수주 · 물량 확보" },
  { value: "insight", label: "규제 · 시장 인사이트" },
  { value: "networking", label: "네트워킹 · 오프라인 모임" },
];

export function JoinForm() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    company: "",
    license: "",
    purpose: "",
  });
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle"
  );

  function set(key: string, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function submit() {
    if (!form.name || !form.contact || !form.company || !agreed) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("join failed");
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div
        id="join"
        className="border border-brass/50 bg-brass/10 px-6 py-12 text-center"
      >
        <p className="text-[18px] font-extrabold text-brass-foreground">
          가입 신청이 접수되었습니다 ✓
        </p>
        <p className="mx-auto mt-3 max-w-md text-[13.5px] leading-relaxed text-muted-foreground">
          멤버십 자격 검토 후 연락드리겠습니다. 승인되시면 연회비 안내와 함께
          프라이빗 카카오톡 라운지 입장 링크를 보내드립니다.
        </p>
      </div>
    );
  }

  return (
    <div id="join" className="border border-border bg-card p-6 shadow-sm md:p-8">
      <p className="text-[17px] font-extrabold">멤버십 가입 신청</p>
      <p className="mt-1 text-[13px] text-muted-foreground">
        승인제로 운영됩니다. 심사 후 승인되신 분께만 커뮤니티 입장 링크를
        안내합니다.
      </p>

      <div className="mt-6 grid gap-3 md:grid-cols-2">
        <Input
          placeholder="성함 *"
          value={form.name}
          onChange={(e) => set("name", e.target.value)}
          className="h-12"
        />
        <Input
          placeholder="연락처 * (010-0000-0000)"
          value={form.contact}
          onChange={(e) => set("contact", e.target.value)}
          className="h-12"
        />
        <Input
          placeholder="회사명 * (예: ○○건설(주))"
          value={form.company}
          onChange={(e) => set("company", e.target.value)}
          className="h-12"
        />
        <Input
          placeholder="보유 면허 (예: 토건, 실내건축)"
          value={form.license}
          onChange={(e) => set("license", e.target.value)}
          className="h-12"
        />
        <Select value={form.purpose} onValueChange={(v) => set("purpose", v)}>
          <SelectTrigger className="h-12 md:col-span-2">
            <SelectValue placeholder="가입 목적을 선택해 주세요" />
          </SelectTrigger>
          <SelectContent>
            {PURPOSES.map((p) => (
              <SelectItem key={p.value} value={p.value}>
                {p.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <label className="mt-5 flex items-start gap-2 text-[12px] text-muted-foreground">
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="mt-0.5 h-4 w-4 accent-primary"
        />
        <span>
          [필수] 개인정보 수집·이용에 동의합니다. (수집 항목: 성함, 연락처,
          회사명, 면허 정보 / 목적: 멤버십 심사 및 안내 / 보유 기간: 상담 종료
          후 1년)
        </span>
      </label>

      {status === "error" && (
        <p className="mt-3 text-[12.5px] font-semibold text-destructive">
          필수 항목(성함·연락처·회사명)을 입력하고 개인정보 수집에 동의해
          주세요.
        </p>
      )}

      <Button
        size="lg"
        className="mt-6 w-full md:w-auto md:px-10"
        onClick={submit}
        disabled={status === "loading"}
      >
        {status === "loading" ? "접수 중…" : "가입 신청하기"}
      </Button>
    </div>
  );
}
