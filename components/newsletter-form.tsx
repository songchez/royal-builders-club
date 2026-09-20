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

export function NewsletterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [segment, setSegment] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle"
  );

  async function subscribe() {
    if (!name || !email || !segment || !agreed) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, segment }),
      });
      if (!res.ok) throw new Error("subscribe failed");
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="border border-brass/50 bg-brass/10 px-6 py-8 text-center">
        <p className="text-[16px] font-extrabold text-brass-foreground">
          구독 신청이 완료되었습니다 ✓
        </p>
        <p className="mt-2 text-[13px] text-muted-foreground">
          매주 월요일 아침, 건설 경영에 꼭 필요한 내용만 보내드립니다.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="grid gap-3 md:grid-cols-[1fr_1.4fr_1fr_auto]">
        <Input
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="h-12 bg-card"
        />
        <Input
          type="email"
          placeholder="이메일 주소"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-12 bg-card"
        />
        <Select value={segment} onValueChange={setSegment}>
          <SelectTrigger className="h-12 bg-card">
            <SelectValue placeholder="구분" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ceo">건설사 대표</SelectItem>
            <SelectItem value="manager">실무자</SelectItem>
            <SelectItem value="founder">예비 창업자</SelectItem>
            <SelectItem value="partner">협력 파트너</SelectItem>
          </SelectContent>
        </Select>
        <Button
          size="lg"
          className="h-12 px-7"
          onClick={subscribe}
          disabled={status === "loading"}
        >
          {status === "loading" ? "처리 중…" : "구독하기"}
        </Button>
      </div>
      <label className="flex items-start gap-2 text-[12px] text-muted-foreground">
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="mt-0.5 h-4 w-4 accent-primary"
        />
        <span>
          뉴스레터 수신(광고성 정보 포함)에 동의합니다. 언제든 수신거부할 수
          있으며 동의 이력은 관련 법령에 따라 보관됩니다.
        </span>
      </label>
      {status === "error" && (
        <p className="text-[12.5px] font-semibold text-destructive">
          이름·이메일·구분을 모두 입력하고 수신에 동의해 주세요.
        </p>
      )}
    </div>
  );
}
