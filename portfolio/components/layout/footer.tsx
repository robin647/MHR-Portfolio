import { Heart, ArrowUpRight } from "lucide-react";
import { profile } from "@/config/profile";
import { socialLinks } from "@/config/social";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-base-border">
      <div className="container grid gap-10 py-16 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-semibold text-ink">
            <span className="text-signal">{"<"}</span>
            {profile.name}
            <span className="text-signal">{"/>"}</span>
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-muted">
            {profile.tagline}
          </p>
        </div>

        <div>
          <p className="eyebrow mb-4">Quick Links</p>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-ink-muted transition-colors hover:text-signal"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Connect</p>
          <div className="flex flex-wrap gap-2">
            {socialLinks
              .filter((s) => s.enabled)
              .map((s) => (
                <a
                  key={s.id}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="glass flex h-9 w-9 items-center justify-center rounded-full text-ink-muted transition-colors hover:text-signal"
                >
                  <s.icon size={15} />
                </a>
              ))}
          </div>
        </div>
      </div>

      <div className="container flex flex-col items-center justify-between gap-4 border-t border-base-border py-6 sm:flex-row">
        <p className="font-mono text-xs text-ink-dim">
          © {year} {profile.name}. All rights reserved.
        </p>
        <p className="flex items-center gap-1.5 font-mono text-xs text-ink-dim">
          Made with <Heart size={12} className="fill-signal text-signal" /> and Next.js
        </p>
        <a
          href="#home"
          className="flex items-center gap-1 font-mono text-xs text-ink-dim transition-colors hover:text-signal"
        >
          Back to top <ArrowUpRight size={12} />
        </a>
      </div>
    </footer>
  );
}
