import { profile } from "@/lib/profile";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-muted sm:px-6">
        © {new Date().getFullYear()} {profile.name}
      </div>
    </footer>
  );
}
