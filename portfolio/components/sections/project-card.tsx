"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import type { Project } from "@/types";
import { Badge } from "@/components/ui/badge";

export function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (p: Project) => void;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      className="glass gradient-border group cursor-pointer overflow-hidden rounded-xl2"
      onClick={() => onOpen(project)}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-base via-base/10 to-transparent opacity-80" />
        <div className="absolute right-3 top-3">
          <Badge
            className={
              project.status === "Live"
                ? "border-signal/30 text-signal"
                : "border-violet/30 text-violet"
            }
          >
            {project.status}
          </Badge>
        </div>
        <div className="absolute inset-x-0 bottom-0 flex translate-y-2 items-center gap-2 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="glass flex h-8 w-8 items-center justify-center rounded-full text-ink hover:text-signal"
            >
              <Github size={14} />
            </a>
          )}
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="glass flex h-8 w-8 items-center justify-center rounded-full text-ink hover:text-signal"
            >
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>

      <div className="p-5">
        <p className="eyebrow mb-1.5">{project.category}</p>
        <h3 className="font-display text-base font-semibold text-ink">{project.title}</h3>
        <p className="mt-1.5 line-clamp-2 text-sm text-ink-muted">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 3).map((t) => (
            <span
              key={t}
              className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 font-mono text-[10px] text-ink-muted"
            >
              {t}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 font-mono text-[10px] text-ink-dim">
              +{project.techStack.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
