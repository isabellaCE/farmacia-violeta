"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

export function WhatsAppButton() {
  return (
    <motion.a
      href={whatsappUrl("general")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-peach-500 text-violet-950 shadow-lg shadow-violet-950/20 transition-colors hover:bg-peach-400 focus-visible:shadow-[0_0_0_3px_var(--color-cream)]"
    >
      <MessageCircle className="h-6 w-6" />
    </motion.a>
  );
}
