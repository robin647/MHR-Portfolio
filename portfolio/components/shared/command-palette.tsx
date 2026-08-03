"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import {
  Home,
  User,
  Wrench,
  Briefcase,
  FolderGit2,
  History,
  MessageSquareQuote,
  Mail,
  FileDown,
  Github,
  Linkedin,
} from "lucide-react";
import { profile } from "@/config/profile";
import { socialLinks } from "@/config/social";

const navItems = [
  { label: "Home", href: "#home", icon: Home },
  { label: "About", href: "#about", icon: User },
  { label: "Skills", href: "#skills", icon: Wrench },
  { label: "Services", href: "#services", icon: Briefcase },
  { label: "Projects", href: "#projects", icon: FolderGit2 },
  { label: "Experience", href: "#experience", icon: History },
  { label: "Testimonials", href: "#testimonials", icon: MessageSquareQuote },
  { label: "Contact", href: "#contact", icon: Mail },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.open(href, "_blank");
    }
  };

  const github = socialLinks.find((s) => s.id === "github");
  const linkedin = socialLinks.find((s) => s.id === "linkedin");

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center bg-black/60 pt-[12vh] backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <Command
        onClick={(e) => e.stopPropagation()}
        className="glass w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 shadow-card"
      >
        <div className="flex items-center gap-2 border-b border-white/10 px-4">
          <span className="font-mono text-signal">$</span>
          <Command.Input
            autoFocus
            placeholder="Jump to a section or link…"
            className="h-12 w-full bg-transparent font-mono text-sm text-ink outline-none placeholder:text-ink-dim"
          />
        </div>
        <Command.List className="max-h-80 overflow-y-auto p-2">
          <Command.Empty className="px-4 py-6 text-center text-sm text-ink-muted">
            No results found.
          </Command.Empty>
          <Command.Group heading="Navigate" className="px-2 py-1 text-xs text-ink-dim">
            {navItems.map((item) => (
              <Command.Item
                key={item.href}
                onSelect={() => go(item.href)}
                className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm text-ink data-[selected=true]:bg-white/[0.06]"
              >
                <item.icon size={15} className="text-signal" />
                {item.label}
              </Command.Item>
            ))}
          </Command.Group>
          <Command.Group heading="Links" className="px-2 py-1 text-xs text-ink-dim">
            <Command.Item
              onSelect={() => go(profile.resumeUrl)}
              className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm text-ink data-[selected=true]:bg-white/[0.06]"
            >
              <FileDown size={15} className="text-signal" />
              Download résumé
            </Command.Item>
            {github && (
              <Command.Item
                onSelect={() => go(github.href)}
                className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm text-ink data-[selected=true]:bg-white/[0.06]"
              >
                <Github size={15} className="text-signal" />
                GitHub profile
              </Command.Item>
            )}
            {linkedin && (
              <Command.Item
                onSelect={() => go(linkedin.href)}
                className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm text-ink data-[selected=true]:bg-white/[0.06]"
              >
                <Linkedin size={15} className="text-signal" />
                LinkedIn profile
              </Command.Item>
            )}
          </Command.Group>
        </Command.List>
        <div className="flex items-center justify-between border-t border-white/10 px-4 py-2 font-mono text-[11px] text-ink-dim">
          <span>↑↓ navigate</span>
          <span>↵ select</span>
          <span>esc close</span>
        </div>
      </Command>
    </div>
  );
}
