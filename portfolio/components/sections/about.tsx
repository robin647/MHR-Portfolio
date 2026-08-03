"use client";

import { motion } from "framer-motion";
import { Target, Eye, GraduationCap } from "lucide-react";
import { profile } from "@/config/profile";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { Card } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="container">
        <SectionHeading
          eyebrow="about"
          title="Engineering products, not just code."
          description="A quick summary of who I am, how I work, and what I've done so far."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <div className="space-y-5 lg:col-span-2">
            {profile.bio.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="leading-relaxed text-ink-muted"
              >
                {p}
              </motion.p>
            ))}

            <div className="grid gap-4 pt-4 sm:grid-cols-2">
              <Card>
                <Target className="mb-3 text-signal" size={20} />
                <p className="mb-1 font-display text-sm font-semibold text-ink">Mission</p>
                <p className="text-sm text-ink-muted">{profile.mission}</p>
              </Card>
              <Card>
                <Eye className="mb-3 text-violet" size={20} />
                <p className="mb-1 font-display text-sm font-semibold text-ink">Vision</p>
                <p className="text-sm text-ink-muted">{profile.vision}</p>
              </Card>
            </div>

            <Card className="mt-4">
              <div className="flex items-start gap-3">
                <GraduationCap className="mt-0.5 shrink-0 text-signal" size={20} />
                <div>
                  <p className="mb-1 font-display text-sm font-semibold text-ink">Education</p>
                  {profile.education.map((e) => (
                    <p key={e.degree} className="text-sm text-ink-muted">
                      {e.degree} — {e.institution}{" "}
                      <span className="font-mono text-xs text-ink-dim">({e.period})</span>
                    </p>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {profile.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Card className="flex h-full flex-col justify-between">
                  <p className="font-display text-3xl font-semibold text-gradient">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-2 text-xs leading-snug text-ink-muted">{stat.label}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
