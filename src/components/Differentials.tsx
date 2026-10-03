"use client";

import { motion } from "framer-motion";
import { GraduationCap, Microscope, HeartHandshake, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Flower } from "@/components/decor/Flower";
import { EnteringShape } from "@/components/decor/EnteringShape";
import { WaveDivider } from "@/components/ui/WaveDivider";

const POINTS = [
  {
    icon: GraduationCap,
    title: "Equipe especializada",
    text: "Farmacêuticos com formação contínua.",
  },
  {
    icon: Microscope,
    title: "Controle de qualidade",
    text: "Cada lote é analisado antes da entrega.",
  },
  {
    icon: HeartHandshake,
    title: "Atendimento humanizado",
    text: "Acompanhamento do primeiro contato à retirada.",
  },
  {
    icon: ShieldCheck,
    title: "Rastreabilidade",
    text: "Insumos certificados e rastreáveis.",
  },
];

export function Differentials() {
  return (
    <section
      id="diferenciais"
      className="relative flex overflow-hidden bg-gradient-to-b from-peach-100 to-peach-200 py-32 lg:min-h-[80svh] lg:items-center"
    >
      <WaveDivider className="absolute inset-x-0 top-0 z-[1] -mt-px rotate-180 text-cream" />
      <WaveDivider className="absolute inset-x-0 bottom-0 z-[1] -mb-px text-violet-950" />

      <EnteringShape
        edge="left"
        className="pointer-events-none absolute -bottom-16 -left-20 z-0 h-72 w-72 text-peach-400"
      >
        <Flower className="h-full w-full" />
      </EnteringShape>
      <EnteringShape
        edge="top"
        delay={0.2}
        className="pointer-events-none absolute right-10 top-24 z-0 h-20 w-20 text-peach-300"
      >
        <Flower className="h-full w-full" petals={6} />
      </EnteringShape>

      <Container className="relative z-10 grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl font-semibold leading-tight text-violet-950 sm:text-4xl lg:text-5xl">
            O que sustenta cada fórmula
          </h2>
          <p className="mt-5 max-w-sm text-lg text-violet-900/85">
            30 anos de tradição e mais de 50 mil fórmulas feitas por farmacêuticos
            especializados.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2">
          {POINTS.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`rounded-3xl bg-white p-6 shadow-lg shadow-violet-900/10 ring-1 ring-violet-900/5 ${
                i % 2 === 1 ? "sm:translate-y-8" : ""
              }`}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-900 text-peach-300">
                <point.icon className="h-6 w-6" strokeWidth={2} />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-violet-950">
                {point.title}
              </h3>
              <p className="mt-1.5 leading-relaxed text-violet-900/85">{point.text}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
