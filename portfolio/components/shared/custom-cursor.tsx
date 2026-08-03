"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { damping: 25, stiffness: 300 });
  const ringY = useSpring(y, { damping: 25, stiffness: 300 });

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    setIsDesktop(finePointer);
    if (!finePointer) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      const target = e.target as HTMLElement;
      setIsPointer(!!target.closest("a, button, [role='button'], input, textarea"));
    };
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    document.documentElement.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, [x, y]);

  if (!isDesktop) return null;

  return (
    <>
      <motion.div
        className="cursor-dot bg-signal"
        style={{ x, y, width: 6, height: 6, opacity: visible ? 1 : 0 }}
      />
      <motion.div
        className="cursor-ring border border-signal/50"
        style={{
          x: ringX,
          y: ringY,
          width: isPointer ? 46 : 30,
          height: isPointer ? 46 : 30,
          opacity: visible ? 1 : 0,
          transition: "width 0.2s ease, height 0.2s ease",
        }}
      />
    </>
  );
}
