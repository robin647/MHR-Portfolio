"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search } from "lucide-react";
import Marquee from "react-fast-marquee";
import projectsData from "@/data/projects.json";
import type { Project } from "@/types";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProjectCard } from "./project-card";
import { ProjectModal } from "./project-modal";
import { cn } from "@/lib/utils";

const projects = projectsData as Project[];
const categories = ["All", "AI", "Backend", "Frontend", "Automation", "Full Stack", "ML"] as const;
const PAGE_SIZE = 6;

export function Projects() {
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<Project | null>(null);

  const featured = projects.filter((p) => p.featured);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory = category === "All" || p.category === category;
      const matchesQuery =
        query.trim() === "" ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()));
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <section id="projects" className="section-pad relative">
      <div className="container">
        <SectionHeading
          eyebrow="projects"
          title="Selected work."
          description="A mix of AI systems, backend platforms, and full-stack products — each one built to editing-friendly JSON so this list grows without touching layout code."
        />

        {featured.length > 0 && (
          <div className="mt-10 overflow-hidden rounded-2xl border border-base-border py-1">
            <Marquee speed={32} pauseOnHover gradient={false}>
              {featured.map((p) => (
                <span
                  key={p.slug}
                  className="mx-4 flex items-center gap-2 font-mono text-xs text-ink-dim"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                  Featured — {p.title}
                </span>
              ))}
            </Marquee>
          </div>
        )}

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => {
                  setCategory(c);
                  setPage(1);
                }}
                className={cn(
                  "rounded-full border px-4 py-1.5 text-xs transition-colors",
                  category === c
                    ? "border-signal/40 bg-signal/10 text-signal"
                    : "border-base-border text-ink-muted hover:text-ink"
                )}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="glass flex items-center gap-2 rounded-full px-4 py-2 sm:w-64">
            <Search size={14} className="text-ink-dim" />
            <input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setPage(1);
              }}
              placeholder="Search projects…"
              className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-ink-dim"
            />
          </div>
        </div>

        <motion.div layout className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {paginated.map((project) => (
              <ProjectCard key={project.slug} project={project} onOpen={setSelected} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="mt-16 text-center text-sm text-ink-muted">
            No projects match that search. Try another keyword or category.
          </p>
        )}

        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={cn(
                  "h-9 w-9 rounded-full font-mono text-xs transition-colors",
                  page === p
                    ? "bg-signal-gradient text-[#06110F]"
                    : "glass text-ink-muted hover:text-ink"
                )}
              >
                {p}
              </button>
            ))}
          </div>
        )}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
