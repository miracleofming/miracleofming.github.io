import Link from "next/link";
import { profile } from "@/lib/profile";

const nav = [
  { href: "/#apps", label: "앱" },
  { href: "/#about", label: "소개" },
  { href: "/#contact", label: "연락" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-line">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="font-bold tracking-tight">
          {profile.siteName}
        </Link>
        <nav className="flex gap-5 text-sm text-muted">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
