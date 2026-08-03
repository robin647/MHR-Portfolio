"use client";

import { motion } from "framer-motion";
import { FileDown, FileText } from "lucide-react";
import { profile } from "@/config/profile";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function Resume() {
  return (
    <section id="resume" className="section-pad relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="flex flex-col items-center gap-6 p-10 text-center sm:flex-row sm:text-left">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-signal/10 text-signal">
              <FileText size={26} />
            </div>
            <div className="flex-1">
              <h3 className="font-display text-xl font-semibold text-ink">
                Want the full picture?
              </h3>
              <p className="mt-1.5 text-sm text-ink-muted">
                Download my résumé for a detailed breakdown of my experience, education, and
                technical skills.
                <span className="block font-mono text-xs text-ink-dim">
                  Replace <code>/public/resume.pdf</code> with your own file to update this link.
                </span>
              </p>
            </div>
            <Button size="lg" onClick={() => window.open(profile.resumeUrl, "_blank")}>
              <FileDown size={16} /> Download Résumé
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
