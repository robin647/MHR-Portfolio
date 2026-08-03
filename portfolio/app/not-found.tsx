"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-mono text-sm text-signal">error --code 404</p>
        <h1 className="mt-4 font-display text-6xl font-semibold text-gradient sm:text-8xl">
          404
        </h1>
        <p className="mt-4 max-w-md text-ink-muted">
          This route doesn&apos;t exist. The page you&apos;re looking for may have been moved or
          never built.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href="/">
            <Button>
              <Home size={15} /> Back home
            </Button>
          </Link>
          <Button variant="secondary" onClick={() => window.history.back()}>
            <ArrowLeft size={15} /> Go back
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
