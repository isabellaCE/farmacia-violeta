"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const OFFSETS: Record<string, { x?: number; y?: number; rotate: number }> = {
  left: { x: -36, rotate: -20 },
  right: { x: 36, rotate: 20 },
  top: { y: -36, rotate: -14 },
  bottom: { y: 36, rotate: 14 },
};

type Props = {
  edge: "left" | "right" | "top" | "bottom";
  className?: string;
  children: ReactNode;
  delay?: number;
  duration?: number;
};

export function EnteringShape({ edge, className, children, delay = 0, duration = 1.2 }: Props) {
  const offset = OFFSETS[edge];
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: offset.x ?? 0, y: offset.y ?? 0, rotate: offset.rotate, scale: 0.85 }}
      whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
      viewport={{ once: true, amount: 0, margin: "200px" }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
