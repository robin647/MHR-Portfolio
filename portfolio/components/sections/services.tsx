"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { ArrowUpRight, Check } from "lucide-react";
import servicesData from "@/data/services.json";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card } from "@/components/ui/card";
import type { Service } from "@/types";

const services = servicesData as Service[];

export function Services() {
  return (
    <section id="services" className="section-pad relative">
      <div className="container">
        <SectionHeading
          eyebrow="services"
          title="How I can help your team."
          description="From a single API to a full AI-powered product — pick the scope that fits, or let's define it together."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = (Icons as any)[service.icon] ?? Icons.Sparkles;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              >
                <Card className="group h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-signal/10 text-signal">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {service.description}
                  </p>
                  <ul className="mt-4 space-y-1.5">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-ink-muted">
                        <Check size={12} className="text-signal" /> {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="mt-5 inline-flex items-center gap-1 font-mono text-xs text-signal opacity-80 transition-opacity group-hover:opacity-100"
                  >
                    Discuss a project <ArrowUpRight size={13} />
                  </button>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
