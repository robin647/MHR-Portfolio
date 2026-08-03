"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import certificationsData from "@/data/certifications.json";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card } from "@/components/ui/card";
import type { Certification } from "@/types";

const certifications = certificationsData as Certification[];

export function Certifications() {
  return (
    <section id="certifications" className="section-pad relative">
      <div className="container">
        <SectionHeading eyebrow="certifications" title="Credentials." align="center" />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Card className="flex h-full flex-col items-start transition-transform duration-300 hover:-translate-y-1">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-signal/10 text-signal">
                  <Award size={18} />
                </div>
                <p className="font-display text-sm font-semibold text-ink">{cert.title}</p>
                <p className="mt-1 text-xs text-ink-muted">{cert.issuer}</p>
                <div className="mt-4 flex w-full items-center justify-between">
                  <span className="font-mono text-[11px] text-ink-dim">{cert.date}</span>
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink-dim hover:text-signal"
                    aria-label={`View credential for ${cert.title}`}
                  >
                    <ExternalLink size={13} />
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
