"use client";

import { motion } from "framer-motion";
import skillsData from "@/data/skills.json";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card } from "@/components/ui/card";
import type { SkillCategory } from "@/types";

const skills = skillsData as SkillCategory[];

export function Skills() {
  return (
    <section id="skills" className="section-pad relative">
      <div className="container">
        <SectionHeading
          eyebrow="skills"
          title="Tools I reach for daily."
          description="A working toolkit spanning backend systems, modern frontends, applied AI, and the infrastructure that ties it together."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: gi * 0.06 }}
            >
              <Card className="h-full transition-transform duration-300 hover:-translate-y-1">
                <p className="eyebrow mb-4">{group.category}</p>
                <ul className="space-y-4">
                  {group.items.map((skill) => (
                    <li key={skill.name}>
                      <div className="mb-1.5 flex items-center justify-between text-xs">
                        <span className="text-ink">{skill.name}</span>
                        <span className="font-mono text-ink-dim">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full rounded-full bg-signal-gradient"
                        />
                      </div>
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
