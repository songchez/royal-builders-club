"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

const NAV = [
  { href: "/services", label: "전문 자문" },
  { href: "/insight", label: "인사이트" },
  { href: "/about", label: "소개" },
  { href: "/community", label: "커뮤니티" },
];

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      {light ? (
        <img
          src="/images/favicon.png"
          alt="로열빌더스클럽 엠블럼"
          width={36}
          height={36}
          className="h-9 w-9 border border-white/15 object-contain"
        />
      ) : (
        <img
          src="/images/logo-emblem.png?v=2"
          alt="로열빌더스클럽 엠블럼"
          width={36}
          height={36}
          className="h-9 w-9 object-contain"
        />
      )}
      <span className="leading-tight">
        <span
          className={`block text-[15px] font-extrabold tracking-[0.08em] ${
            light ? "text-white" : "text-foreground"
          }`}
        >
          로열빌더스클럽
        </span>
        <span
          className={`block text-[9px] font-semibold tracking-[0.22em] ${
            light ? "text-white/60" : "text-muted-foreground"
          }`}
        >
          ROYAL BUILDERS CLUB KOREA
        </span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-lg px-3.5 py-2 text-[14px] font-semibold transition-colors ${
                pathname === item.href
                  ? "bg-secondary text-primary"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" size="sm" asChild>
            <a href="tel:000-0000-0000">
              <Phone className="h-4 w-4" />
              상담 전화
            </a>
          </Button>
          <Button size="sm" asChild>
            <Link href="/#inquiry">자문 문의</Link>
          </Button>
        </div>

        {/* Mobile menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground md:hidden"
              aria-label="메뉴 열기"
            >
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 p-0">
            <SheetHeader className="border-b border-border px-5 py-4 text-left">
              <SheetTitle className="text-left">
                <Logo />
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col p-3">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-4 py-3.5 text-[15px] font-semibold ${
                    pathname === item.href
                      ? "bg-secondary text-primary"
                      : "text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Separator className="my-3" />
              <Button size="lg" className="w-full" asChild>
                <Link href="/#inquiry" onClick={() => setOpen(false)}>
                  자문 문의하기
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
