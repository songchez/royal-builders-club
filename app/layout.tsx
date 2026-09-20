import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Noto_Serif_KR } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { StickyCta } from "@/components/sticky-cta";
import { AiChat } from "@/components/ai-chat";

const pretendard = localFont({
  src: "../public/fonts/PretendardVariable.woff2",
  variable: "--font-sans",
  display: "swap",
  weight: "45 920",
});

const notoSerifKr = Noto_Serif_KR({
  variable: "--font-display",
  display: "swap",
  weight: ["600", "700", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "로열빌더스클럽 — 대한민국 건설 리더들의 네트워크",
    template: "%s | 로열빌더스클럽",
  },
  description:
    "검증된 건설사들이 협업·양도양수·하청 수주를 주고받는 연회비 멤버십 커뮤니티. 로열빌더스클럽코리아.",
  keywords: [
    "건설업 커뮤니티",
    "건설업 양도양수",
    "건설면허",
    "하도급 수주",
    "건설사 네트워크",
    "기업진단",
  ],
  openGraph: {
    title: "로열빌더스클럽 — 대한민국 건설 리더들의 네트워크",
    description:
      "협업·양도양수·하청 수주가 오가는 검증된 건설사 멤버십 커뮤니티",
    type: "website",
    locale: "ko_KR",
    siteName: "로열빌더스클럽",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1F4066",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className={`${pretendard.variable} ${notoSerifKr.variable}`}>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased tabular-nums">
        <SiteHeader />
        <main className="pb-16 md:pb-0">{children}</main>
        <SiteFooter />
        <StickyCta />
        <AiChat />
      </body>
    </html>
  );
}
