"use client";

import { motion } from "framer-motion";
import experienceData from "@/data/experience.json";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card } from "@/components/ui/card";
import type { ExperienceItem } from "@/types";

const experience = experienceData as ExperienceItem[];

export function Experience() {
  return (
    <section id="experience" className="section-pad relative">
      <div className="container">
        <SectionHeading
          eyebrow="experience"
          title="Where I've worked."
          description="From an early junior role to running my own freelance practice across three continents' worth of clients."
        />

        <div className="relative mt-14 ml-3 space-y-10 border-l border-base-border pl-8 sm:ml-6 sm:pl-10">
          {experience.map((item, i) => (
            <motion.div
              key={item.role + item.period}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <span className="absolute -left-[41px] top-1.5 h-3 w-3 rounded-full border-2 border-signal bg-base sm:-left-[49px]" />
              <Card>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold text-ink">{item.role}</h3>
                  <span className="font-mono text-xs text-signal">{item.period}</span>
                </div>
                <p className="mt-1 text-sm text-ink-muted">{item.company}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.description}</p>
                <ul className="mt-4 space-y-1.5">
                  {item.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-xs text-ink-muted">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-violet" />
                      {h}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
