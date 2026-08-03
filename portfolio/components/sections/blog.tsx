"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card } from "@/components/ui/card";

const posts = [
  {
    title: "Building a RAG pipeline that actually cites its sources",
    excerpt:
      "Notes on retrieval quality, chunking strategy, and keeping an LLM support agent honest.",
    tag: "AI",
    readTime: "6 min",
  },
  {
    title: "Django + Next.js: a boring, reliable full-stack pattern",
    excerpt: "Why I keep reaching for this split instead of a monolith, and where it breaks.",
    tag: "Full Stack",
    readTime: "8 min",
  },
  {
    title: "Automating client onboarding with n8n and WhatsApp",
    excerpt: "A practical walkthrough of the flow I rebuild most often for e-commerce clients.",
    tag: "Automation",
    readTime: "5 min",
  },
];

export function Blog() {
  return (
    <section id="blog" className="section-pad relative">
      <div className="container">
        <SectionHeading
          eyebrow="blog"
          title="Notes & write-ups."
          description="Long-form posts are coming soon — here's a preview of what's queued up."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Card className="group flex h-full cursor-not-allowed flex-col justify-between opacity-90">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="eyebrow">{post.tag}</span>
                    <span className="glass rounded-full px-2.5 py-1 font-mono text-[10px] text-ink-dim">
                      Coming soon
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-base font-semibold text-ink">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{post.excerpt}</p>
                </div>
                <div className="mt-5 flex items-center justify-between font-mono text-xs text-ink-dim">
                  <span className="flex items-center gap-1.5">
                    <Clock size={12} /> {post.readTime} read
                  </span>
                  <ArrowUpRight size={14} className="opacity-40" />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
