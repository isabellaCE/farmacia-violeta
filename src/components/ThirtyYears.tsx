"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Flower } from "@/components/decor/Flower";
import { EnteringShape } from "@/components/decor/EnteringShape";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { WaveDivider } from "@/components/ui/WaveDivider";

// Marcos tirados do próprio vídeo dos 30 anos. Confirmar datas e termos com a farmácia.
const MILESTONES = [
  { when: "1994", what: "Nasce a Violeta" },
  { when: "2011 e 2012", what: "Chegam as filiais" },
  { when: "Ao longo dos anos", what: "Campanhas e palestras de saúde" },
];

export function ThirtyYears() {
  return (
    <section
      id="trinta-anos"
      className="on-dark relative overflow-hidden bg-violet-900 pt-16 text-cream sm:pt-20"
    >
      <Container className="relative grid items-center gap-14 pb-24 lg:grid-cols-[1fr_auto] lg:gap-20 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-[41rem]"
        >
          <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-[2.6rem]">
            30 anos de história
            <br className="hidden sm:block" /> cuidando de você e do seu pet
          </h2>

          <p className="mt-5 max-w-md text-lg text-violet-100">
            Nascemos em 1994 e crescemos junto com as famílias que atendemos. O cuidado
            segue o mesmo.
          </p>

          <ul className="mt-8 divide-y divide-cream/15 border-y border-cream/15">
            {MILESTONES.map((m) => (
              <li key={m.when} className="flex flex-col gap-0.5 py-3 sm:flex-row sm:gap-6">
                <span className="w-44 shrink-0 font-display text-base font-semibold text-peach-300">
                  {m.when}
                </span>
                <span className="text-violet-100">{m.what}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mx-auto w-[min(100%,21rem)] lg:mx-0 lg:w-[26rem]"
        >
          <EnteringShape
            edge="right"
            className="pointer-events-none absolute -right-10 -top-10 z-0 h-28 w-28 text-peach-400"
          >
            <Flower className="h-full w-full" />
          </EnteringShape>
          <VideoPlayer
            src="/assets/video30anos.mp4"
            poster="/assets/video30anos-poster.webp"
            title="Vídeo dos 30 anos da Violeta"
            className="relative z-10 rounded-[2rem] shadow-2xl shadow-violet-950/40 ring-1 ring-cream/15"
          />
        </motion.div>
      </Container>

      <WaveDivider className="absolute inset-x-0 bottom-0 -mb-px text-cream" />
    </section>
  );
}
