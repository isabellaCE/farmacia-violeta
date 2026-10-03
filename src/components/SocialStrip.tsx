"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { InstagramIcon } from "@/components/decor/InstagramIcon";
import { SITE } from "@/lib/site";

export function SocialStrip() {
  return (
    <section id="redes" className="bg-cream pb-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-between gap-6 border-t border-violet-900/20 pt-10"
        >
          <h2 className="font-display text-2xl font-semibold leading-tight text-violet-950 sm:text-3xl">
            Acompanhe a Violeta no Instagram
          </h2>

          <a
            href={SITE.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-violet-900/30 px-5 py-2.5 text-sm font-semibold text-violet-900 transition-colors hover:bg-violet-900 hover:text-cream"
          >
            <InstagramIcon className="h-4 w-4" />
            {SITE.instagramHandle}
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
