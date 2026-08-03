"use client";

import { motion } from "framer-motion";
import { profile } from "@/config/profile";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card } from "@/components/ui/card";

// Configure just `profile.githubUsername` in /config/profile.ts — everything
// below updates automatically via github-readme-stats (no backend needed).
export function GithubStats() {
  const user = profile.githubUsername;

  return (
    <section id="github" className="section-pad relative">
      <div className="container">
        <SectionHeading
          eyebrow="github"
          title="Open-source activity."
          description={`Live stats pulled for github.com/${user}.`}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 grid gap-5 lg:grid-cols-2"
        >
          <Card className="overflow-hidden p-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${user}&show_icons=true&theme=transparent&hide_border=true&title_color=5EEAD4&text_color=9AA1B2&icon_color=A78BFA`}
              alt="GitHub stats"
              className="w-full"
              loading="lazy"
            />
          </Card>
          <Card className="overflow-hidden p-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${user}&layout=compact&theme=transparent&hide_border=true&title_color=5EEAD4&text_color=9AA1B2`}
              alt="Top languages"
              className="w-full"
              loading="lazy"
            />
          </Card>
          <Card className="overflow-hidden p-2 lg:col-span-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://streak-stats.demolab.com/?user=${user}&theme=transparent&hide_border=true&stroke=5EEAD4&ring=5EEAD4&fire=A78BFA&currStreakLabel=5EEAD4`}
              alt="GitHub streak stats"
              className="mx-auto"
              loading="lazy"
            />
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
