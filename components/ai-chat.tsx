"use client";

import { useEffect, useRef, useState } from "react";
import { Bot, Send, X, MessageCircle } from "lucide-react";
import { searchKb, QUICK_QUESTIONS } from "@/lib/kb";

type Msg = { role: "user" | "bot"; text: string };

export function AiChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [msgs, typing, open]);

  function ask(text: string) {
    const q = text.trim();
    if (!q || typing) return;
    setMsgs((m) => [...m, { role: "user", text: q }]);
    setInput("");
    setTyping(true);
    // 추후 LLM/RAG API 호출로 교체 가능한 지점
    setTimeout(() => {
      setMsgs((m) => [...m, { role: "bot", text: searchKb(q) }]);
      setTyping(false);
    }, 650 + Math.random() * 500);
  }

  function gotoInquiry() {
    setOpen(false);
    document.getElementById("inquiry")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="RBC AI 도우미"
        className="fixed bottom-20 right-4 z-50 flex h-14 w-14 items-center justify-center border border-brass/60 bg-navy text-brass shadow-lg transition-transform hover:scale-105 md:bottom-6 md:right-6"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Panel */}
      {open && (
        <div className="anim-fade-up fixed bottom-36 right-4 z-50 flex h-[540px] w-[calc(100vw-2rem)] max-w-[400px] flex-col border border-border bg-card shadow-2xl md:bottom-24 md:right-6">
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-border bg-navy px-4 py-3.5 text-white">
            <span className="flex h-9 w-9 items-center justify-center bg-brass text-navy-deep">
              <Bot className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <p className="text-[14px] font-extrabold">RBC AI 도우미</p>
              <p className="text-[11px] text-white/60">
                면허 기준·절차를 바로 알려드립니다
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="ml-auto text-white/60 hover:text-white"
              aria-label="닫기"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto p-4">
            {msgs.length === 0 && (
              <div className="space-y-3">
                <div className="border border-border bg-background p-3.5 text-[13px] leading-relaxed text-foreground">
                  안녕하세요, 로열빌더스클럽 AI 도우미입니다.
                  <br />
                  궁금한 면허나 절차를 골라 바로 물어보세요.
                </div>
                <div className="flex flex-wrap gap-2">
                  {QUICK_QUESTIONS.map((q) => (
                    <button
                      key={q}
                      onClick={() => ask(q)}
                      className="border border-brass/50 bg-brass/10 px-3 py-1.5 text-[12px] font-semibold text-brass-foreground transition-colors hover:bg-brass/20"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {msgs.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] whitespace-pre-line px-3.5 py-2.5 text-[13px] leading-relaxed ${
                    m.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "border border-border bg-background text-foreground"
                  }`}
                >
                  {m.text}
                  {m.role === "bot" && m.text.includes("전문가에게 문의 남기기") && (
                    <button
                      onClick={gotoInquiry}
                      className="mt-3 block w-full border border-navy bg-navy px-3 py-2 text-center text-[12.5px] font-bold text-white hover:bg-navy-deep"
                    >
                      전문가에게 문의 남기기 →
                    </button>
                  )}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="flex items-center gap-1 border border-border bg-background px-3.5 py-3">
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              ask(input);
            }}
            className="flex border-t border-border"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="예) 소방 면허 자본금 알려줘"
              className="h-12 flex-1 bg-transparent px-4 text-[13.5px] outline-none placeholder:text-muted-foreground"
            />
            <button
              type="submit"
              aria-label="전송"
              className="flex w-12 items-center justify-center bg-primary text-primary-foreground hover:bg-navy-deep"
            >
              <Send className="h-4.5 w-4.5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
