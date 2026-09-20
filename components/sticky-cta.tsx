import Link from "next/link";
import { Phone } from "lucide-react";

export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-border bg-background/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur md:hidden">
      <a
        href="tel:000-0000-0000"
        className="flex h-12 items-center justify-center gap-2 border border-border bg-card text-[15px] font-bold text-foreground"
      >
        <Phone className="h-4 w-4 text-primary" />
        전화 상담
      </a>
      <Link
        href="/#inquiry"
        className="flex h-12 items-center justify-center bg-primary text-[15px] font-bold text-primary-foreground"
      >
        자문 문의
      </Link>
    </div>
  );
}
