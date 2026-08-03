"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { Send, Loader2, CheckCircle2, Copy } from "lucide-react";
import { profile } from "@/config/profile";
import { socialLinks, contactDetails, emailjsConfig } from "@/config/social";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  subject: z.string().min(3, "Please add a subject"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

type FormValues = z.infer<typeof schema>;

export function Contact() {
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    try {
      // Configure /config/social.ts → emailjsConfig with your EmailJS IDs.
      if (emailjsConfig.serviceId.startsWith("YOUR_")) {
        // Fallback so the form still "works" before EmailJS is configured.
        await new Promise((r) => setTimeout(r, 900));
      } else {
        await emailjs.send(emailjsConfig.serviceId, emailjsConfig.templateId, data, {
          publicKey: emailjsConfig.publicKey,
        });
      }
      setSent(true);
      toast.success("Message sent — I'll reply within a day.");
      reset();
      setTimeout(() => setSent(false), 4000);
    } catch (err) {
      toast.error("Something went wrong. Please email me directly.");
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    toast.success("Email copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section-pad relative">
      <div className="container">
        <SectionHeading
          eyebrow="contact"
          title="Let's build something."
          description="Have a project in mind? Send a few details and I'll reply within a day — usually sooner."
          align="center"
        />

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            <Card>
              <p className="eyebrow mb-4">Direct</p>
              <div className="space-y-3">
                {Object.entries(contactDetails).map(([key, item]) => (
                  <div
                    key={key}
                    className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2.5"
                  >
                    <a
                      href={item.href}
                      className="flex items-center gap-2.5 text-sm text-ink-muted hover:text-ink"
                    >
                      <item.icon size={15} className="text-signal" />
                      {item.label}
                    </a>
                    {key === "email" && (
                      <button
                        onClick={copyEmail}
                        aria-label="Copy email"
                        className="text-ink-dim hover:text-signal"
                      >
                        {copied ? <CheckCircle2 size={14} /> : <Copy size={14} />}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <p className="eyebrow mb-4">Find me on</p>
              <div className="grid grid-cols-2 gap-2">
                {socialLinks
                  .filter((s) => s.enabled)
                  .map((s) => (
                    <a
                      key={s.id}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2.5 text-xs text-ink-muted transition-colors hover:border-signal/30 hover:text-signal"
                    >
                      <s.icon size={14} />
                      {s.label}
                    </a>
                  ))}
              </div>
            </Card>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs text-ink-muted">Name</label>
                    <input
                      {...register("name")}
                      className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-signal/50"
                      placeholder="Jane Doe"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs text-ink-muted">Email</label>
                    <input
                      {...register("email")}
                      className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-signal/50"
                      placeholder="jane@company.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs text-ink-muted">Subject</label>
                  <input
                    {...register("subject")}
                    className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-signal/50"
                    placeholder="Project inquiry"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs text-red-400">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label className="mb-1.5 block text-xs text-ink-muted">Message</label>
                  <textarea
                    {...register("message")}
                    rows={5}
                    className="w-full resize-none rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-signal/50"
                    placeholder="Tell me a bit about your project…"
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
                  )}
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" /> Sending…
                    </>
                  ) : sent ? (
                    <>
                      <CheckCircle2 size={16} /> Sent!
                    </>
                  ) : (
                    <>
                      <Send size={16} /> Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
