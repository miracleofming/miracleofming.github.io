import Link from "next/link";
import { profile } from "@/lib/profile";
import { Container } from "@/components/Section";

const nav = [
  { href: "/#apps", label: "앱" },
  { href: "/#about", label: "소개" },
  { href: "/#contact", label: "연락" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-line">
      <Container className="flex h-14 items-center justify-between">
        <Link href="/" className="text-body font-bold">
          {profile.siteName}
        </Link>
        <nav className="flex gap-5 text-caption text-muted">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
