import Link from "next/link";
import { Logo } from "@/components/site-header";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-navy-deep text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-[1.4fr_1fr_1fr] md:px-6">
        <div>
          <Logo light />
          <p className="mt-4 max-w-sm text-[13px] leading-relaxed text-white/60">
            검증된 건설사들이 협업·양도양수·하청 수주를 주고받는 연회비 멤버십
            커뮤니티. 좋은 동료 하나가 좋은 수주 하나보다 낫습니다.
          </p>
        </div>
        <div>
          <p className="mb-3 text-[12px] font-bold tracking-[0.15em] text-brass">
            바로가기
          </p>
          <ul className="space-y-2 text-[13px] text-white/75">
            <li>
              <Link href="/community" className="hover:text-white">
                커뮤니티 · 멤버십
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white">
                전문 자문
              </Link>
            </li>
            <li>
              <Link href="/insight" className="hover:text-white">
                인사이트
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">
                소개 · 문의
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="mb-3 text-[12px] font-bold tracking-[0.15em] text-brass">
            이용안내
          </p>
          <ul className="space-y-2 text-[13px] text-white/75">
            <li>
              <Link href="/terms" className="hover:text-white">
                이용약관
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="font-semibold hover:text-white">
                개인정보처리방침
              </Link>
            </li>
          </ul>
          <p className="mt-4 text-[13px] text-white/75">
            상담 문의 ·{" "}
            <a href="tel:000-0000-0000" className="hover:text-white">
              000-0000-0000
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 text-[11.5px] text-white/45 md:flex-row md:items-center md:justify-between md:px-6">
          <p>© 2026 Royal Builders Club Korea. All rights reserved.</p>
          <p>본 사이트의 커뮤니티는 심사 승인된 회원에게만 개방됩니다.</p>
        </div>
      </div>
    </footer>
  );
}
