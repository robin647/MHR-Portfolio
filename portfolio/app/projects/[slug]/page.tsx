import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Github, ExternalLink, Calendar, User } from "lucide-react";
import projectsData from "@/data/projects.json";
import type { Project } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";

const projects = projectsData as Project[];

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [{ url: project.thumbnail }],
    },
  };
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <div className="section-pad pt-32">
      <div className="container max-w-4xl">
        <Link
          href="/#projects"
          className="mb-8 inline-flex items-center gap-2 font-mono text-xs text-ink-muted hover:text-signal"
        >
          <ArrowLeft size={14} /> Back to projects
        </Link>

        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
          <Image src={project.thumbnail} alt={project.title} fill className="object-cover" priority />
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-2">
          <Badge>{project.category}</Badge>
          <Badge className="border-violet/30 text-violet">{project.status}</Badge>
        </div>

        <h1 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-4 max-w-2xl leading-relaxed text-ink-muted">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-5 font-mono text-xs text-ink-dim">
          <span className="flex items-center gap-1.5">
            <User size={13} /> {project.client}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar size={13} /> {formatDate(project.date)}
          </span>
        </div>

        <div className="mt-8">
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

        <div className="mt-8">
          <p className="eyebrow mb-2">Key Features</p>
          <ul className="grid gap-2 sm:grid-cols-2">
            {project.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-ink-muted">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-signal" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        {project.gallery.length > 1 && (
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {project.gallery.map((img, i) => (
              <div key={i} className="relative aspect-video overflow-hidden rounded-xl">
                <Image src={img} alt={`${project.title} screenshot ${i + 1}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        )}

        <div className="mt-10 flex flex-wrap gap-3">
          {project.liveDemo && (
            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
              <Button>
                <ExternalLink size={15} /> Live Demo
              </Button>
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Button variant="secondary">
                <Github size={15} /> View Code
              </Button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
