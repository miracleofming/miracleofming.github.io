import { profile } from "@/lib/profile";
import { Container } from "@/components/Section";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <Container className="py-8 text-caption text-muted">
        © {new Date().getFullYear()} {profile.handle}
      </Container>
    </footer>
  );
}
