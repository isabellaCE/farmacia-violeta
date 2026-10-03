"use client";

import { HeartPulse, PawPrint, Leaf, Sparkles, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Flower } from "@/components/decor/Flower";
import { Blob } from "@/components/decor/Blob";
import { EnteringShape } from "@/components/decor/EnteringShape";
import { whatsappUrl } from "@/lib/site";

const SERVICES = [
  {
    icon: HeartPulse,
    title: "Manipulação Humana",
    text: "Fórmulas magistrais, mediante prescrição, para tratamentos clínicos, hormonais, emagrecimento e uso contínuo.",
    href: whatsappUrl("prescription"),
    cta: "Enviar receita",
    external: true,
  },
  {
    icon: PawPrint,
    title: "Saúde Pet",
    text: "Cuidado sob medida para cães e gatos, com formas farmacêuticas palatáveis, seguindo a receita do veterinário.",
    href: "#pet",
    cta: "Ver Saúde Pet",
    external: false,
  },
  {
    icon: Leaf,
    title: "Nutracêuticos",
    text: "Vitaminas, minerais e suplementos personalizados para cada fase da sua rotina.",
    href: whatsappUrl("nutraceuticals"),
    cta: "Falar sobre suplementos",
    external: true,
  },
  {
    icon: Sparkles,
    title: "Dermocosméticos",
    text: "Fórmulas de skincare e capilares desenvolvidas para o que a sua pele realmente precisa.",
    href: whatsappUrl("dermo"),
    cta: "Falar sobre skincare",
    external: true,
  },
];

export function Services() {
  return (
    <section
      id="servicos"
      className="on-dark relative overflow-hidden bg-violet-950 py-24 text-cream"
    >
      <Blob className="pointer-events-none absolute -bottom-32 -left-32 h-[30rem] w-[30rem] text-violet-800/50" />
      <EnteringShape
        edge="top"
        className="pointer-events-none absolute -top-12 left-16 h-24 w-24 text-peach-400/80"
      >
        <Flower className="h-full w-full" petals={6} />
      </EnteringShape>

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
            Cuidado sob medida em cada especialidade
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <motion.a
              key={service.title}
              href={service.href}
              {...(service.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex flex-col rounded-3xl border border-cream/10 bg-violet-900/60 p-6 transition-colors hover:border-peach-400/40 hover:bg-violet-900"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-peach-500/15 text-peach-400">
                <service.icon className="h-6 w-6" strokeWidth={2} />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-cream">
                {service.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-violet-100/85">
                {service.text}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-peach-300">
                {service.cta}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </motion.a>
          ))}
        </div>
      </Container>
    </section>
  );
}
