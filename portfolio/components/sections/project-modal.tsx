"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, Github, ExternalLink, Calendar, User } from "lucide-react";
import type { Project } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const [activeImage, setActiveImage] = useState(0);

  if (!project) return null;

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="glass max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-2xl shadow-card"
          >
            <div className="relative aspect-[16/9]">
              <Image
                src={project.gallery[activeImage] ?? project.thumbnail}
                alt={project.title}
                fill
                sizes="768px"
                className="object-cover"
              />
              <button
                onClick={onClose}
                aria-label="Close"
                className="glass absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-ink hover:text-signal"
              >
                <X size={16} />
              </button>
              {project.gallery.length > 1 && (
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {project.gallery.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      aria-label={`Show image ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all ${
                        i === activeImage ? "w-6 bg-signal" : "w-1.5 bg-white/40"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-2">
                <Badge>{project.category}</Badge>
                <Badge className="border-violet/30 text-violet">{project.status}</Badge>
              </div>

              <h3 className="mt-4 font-display text-2xl font-semibold text-ink">
                {project.title}
              </h3>
              <p className="mt-3 leading-relaxed text-ink-muted">{project.description}</p>

              <div className="mt-5 flex flex-wrap gap-4 font-mono text-xs text-ink-dim">
                <span className="flex items-center gap-1.5">
                  <User size={13} /> {project.client}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} /> {formatDate(project.date)}
                </span>
              </div>

              <div className="mt-6">
                <p className="eyebrow mb-2">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-xs text-violet"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <p className="eyebrow mb-2">Key Features</p>
                <ul className="grid gap-1.5 sm:grid-cols-2">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-ink-muted">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-signal" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.liveDemo && (
                  <Button onClick={() => window.open(project.liveDemo, "_blank")}>
                    <ExternalLink size={15} /> Live Demo
                  </Button>
                )}
                {project.github && (
                  <Button
                    variant="secondary"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <Github size={15} /> View Code
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
