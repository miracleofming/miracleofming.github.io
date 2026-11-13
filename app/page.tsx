import { apps } from "@/lib/apps";
import { profile } from "@/lib/profile";

export default function Home() {
  return (
    <main>
      <header>
        <h1 className="text-3xl font-bold tracking-tight">{profile.name}</h1>
        <p className="mt-1 text-muted">{profile.role}</p>
        <p className="mt-6 leading-7">{profile.intro}</p>
      </header>

      <section className="mt-16">
        <h2 className="text-sm font-semibold text-muted">만든 앱</h2>
        <ul className="mt-4 divide-y divide-line border-t border-line">
          {apps.map((app) => (
            <li key={app.slug} className="py-4">
              <p className="font-semibold">{app.name}</p>
              <p className="mt-1 text-sm text-muted">{app.summary}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="text-sm font-semibold text-muted">연락</h2>
        <dl className="mt-4 grid grid-cols-[5rem_1fr] gap-y-2 text-sm">
          {profile.links.map((link) => (
            <div key={link.label} className="contents">
              <dt className="text-muted">{link.label}</dt>
              <dd>
                <a href={link.href} className="text-accent underline-offset-4 hover:underline">
                  {link.text}
                </a>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <footer className="mt-24 text-sm text-muted">© {new Date().getFullYear()} {profile.name}</footer>
    </main>
  );
}
