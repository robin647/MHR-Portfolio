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
          className="relative mx-auto w-full max-w-md pb-14 sm:pb-16 lg:mx-0"
        >
          <div className="absolute -inset-8 -z-10 rounded-[2.5rem] bg-signal-gradient opacity-[0.15] blur-3xl" />

          {/* Large profile photo — the primary visual */}
          <div className="gradient-border glass relative aspect-[4/5] w-full animate-float overflow-hidden rounded-[2rem] shadow-card">
            <Image
              src={profile.profileImage}
              alt={profile.name}
              fill
              sizes="(max-width: 1024px) 85vw, 440px"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/10" />

            <div className="glass absolute left-4 top-4 flex items-center gap-2 rounded-full px-3 py-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
              </span>
              <span className="font-mono text-[11px] text-white">{profile.location}</span>
            </div>

            <div className="absolute inset-x-5 bottom-5">
              <p className="font-display text-lg font-semibold text-white drop-shadow-sm">
                {profile.name}
              </p>
              <p className="font-mono text-xs text-white/70">
                {profile.title} · {profile.timezone}
              </p>
            </div>
          </div>

          {/* Mini terminal — floats as an accent over the photo's corner */}
          <div className="glass gradient-border relative -mt-10 mx-5 rounded-2xl p-4 shadow-card sm:absolute sm:-bottom-2 sm:-right-8 sm:mx-0 sm:mt-0 sm:w-64">
            <div className="mb-3 flex items-center gap-1.5 border-b border-white/5 pb-3">
              <span className="h-2 w-2 rounded-full bg-[#FF5F57]" />
              <span className="h-2 w-2 rounded-full bg-[#FEBC2E]" />
              <span className="h-2 w-2 rounded-full bg-[#28C840]" />
              <span className="ml-2 truncate font-mono text-[10px] text-ink-dim">
                ~/{profile.initials.toLowerCase()}/role.sh
              </span>
            </div>
            <p className="font-mono text-[12px] text-ink-muted">
              <span className="text-signal">$</span> role --current
            </p>
            <p className="mt-1 min-h-[1.2em] font-mono text-[13px] text-ink">
              {typed}
              <span className="animate-blink text-signal">▌</span>
            </p>
            <p className="mt-3 flex flex-wrap gap-1.5">
              {["Python", "Django", "React", "OpenAI"].map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] text-violet"
                >
                  {t}
                </span>
              ))}
            </p>
            <p className="mt-3 font-mono text-[11px] text-signal-soft">
              ✓ open for new projects
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
