"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, FolderGit2, FileDown } from "lucide-react";
import Image from "next/image";
import { profile } from "@/config/profile";
import { socialLinks } from "@/config/social";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/shared/magnetic";

function useTypewriter(words: readonly string[]) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    const speed = deleting ? 45 : 90;

    const timeout = setTimeout(() => {
      if (!deleting) {
        if (text.length < current.length) {
          setText(current.slice(0, text.length + 1));
        } else {
          setTimeout(() => setDeleting(true), 1200);
        }
      } else {
        if (text.length > 0) {
          setText(current.slice(0, text.length - 1));
        } else {
          setDeleting(false);
          setIndex((i) => i + 1);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words]);

  return text;
}

export function Hero() {
  const typed = useTypewriter(profile.roles);
  const primarySocials = socialLinks.filter((s) =>
    ["github", "linkedin", "email"].includes(s.id)
  );

  return (
    <section id="home" className="relative flex min-h-screen items-center pt-28">
      <div className="container grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-xs text-signal">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
            </span>
            {profile.availability}
          </span>

          <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Hi, I&apos;m {profile.name.split(" ")[0]} —
            <br />
            <span className="text-gradient">{profile.title}</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-muted sm:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Magnetic>
              <Button size="lg" onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>
                Hire Me <ArrowRight size={16} />
              </Button>
            </Magnetic>
            <Magnetic>
              <Button
                size="lg"
                variant="secondary"
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                <FolderGit2 size={16} /> View Projects
              </Button>
            </Magnetic>
            <Magnetic>
              <Button size="lg" variant="ghost" onClick={() => window.open(profile.resumeUrl, "_blank")}>
                <FileDown size={16} /> Resume
              </Button>
            </Magnetic>
          </div>

          <div className="mt-10 flex items-center gap-3">
            {primarySocials.map((s) => (
              <a
                key={s.id}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="glass flex h-10 w-10 items-center justify-center rounded-full text-ink-muted transition-all hover:-translate-y-0.5 hover:text-signal"
              >
                <s.icon size={16} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="relative"
        >
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-signal-gradient opacity-[0.12] blur-3xl" />

          <div className="glass gradient-border animate-float overflow-hidden rounded-2xl shadow-card">
            <div className="flex items-center gap-1.5 border-b border-white/5 bg-white/[0.02] px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
              <span className="ml-3 font-mono text-[11px] text-ink-dim">
                ~/{profile.initials.toLowerCase()}/whoami.sh
              </span>
            </div>
            <div className="space-y-3 p-6 font-mono text-[13px] leading-relaxed text-ink-muted">
              <p>
                <span className="text-signal">$</span> whoami
              </p>
              <p className="text-ink">{profile.name}</p>
              <p>
                <span className="text-signal">$</span> role --current
              </p>
              <p className="text-ink">
                {typed}
                <span className="animate-blink text-signal">▌</span>
              </p>
              <p>
                <span className="text-signal">$</span> stack --top
              </p>
              <p className="flex flex-wrap gap-1.5 pt-1">
                {["Python", "Django", "React", "Next.js", "OpenAI"].map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[11px] text-violet"
                  >
                    {t}
                  </span>
                ))}
              </p>
              <p className="pt-2">
                <span className="text-signal">$</span> status
              </p>
              <p className="text-signal-soft">✓ open for new projects</p>
            </div>
          </div>

          <div className="glass absolute -bottom-6 -left-6 hidden items-center gap-3 rounded-xl p-3 shadow-card sm:flex">
            <div className="relative h-9 w-9 overflow-hidden rounded-full bg-white/10">
              <Image
                src={profile.profileImage}
                alt={profile.name}
                fill
                sizes="36px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-xs font-medium text-ink">{profile.location}</p>
              <p className="font-mono text-[10px] text-ink-dim">{profile.timezone}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
