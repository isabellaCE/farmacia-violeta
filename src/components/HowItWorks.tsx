"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { whatsappUrl } from "@/lib/site";

const STEPS = [
  {
    title: "Envie a receita",
    text: "Pelo WhatsApp ou na farmácia. Fórmulas medicamentosas são manipuladas mediante prescrição; para pets, a receita é do veterinário.",
  },
  {
    title: "Análise do farmacêutico",
    text: "Um farmacêutico especializado confere a prescrição e tira suas dúvidas.",
  },
  {
    title: "Manipulação e análise do lote",
    text: "A fórmula é manipulada com insumos certificados e cada lote passa por análise.",
  },
  {
    title: "Retirada com acompanhamento",
    text: "Você retira a fórmula e segue com o acompanhamento da nossa equipe.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="flex bg-cream py-24 lg:min-h-[80svh] lg:items-center">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h2 className="font-display text-3xl font-semibold leading-tight text-violet-950 sm:text-4xl lg:text-5xl">
            Da receita à retirada, passo a passo
          </h2>
        </motion.div>

        <ol className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="border-t border-violet-900/20 pt-5"
            >
              <span
                aria-hidden="true"
                className="font-display text-4xl font-semibold text-peach-700"
              >
                {i + 1}
              </span>
              <h3 className="mt-2 font-display text-lg font-semibold text-violet-950">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-violet-900/85">{step.text}</p>
            </motion.li>
          ))}
        </ol>

        <a
          href={whatsappUrl("prescription")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-flex items-center gap-2 rounded-full bg-violet-900 px-6 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-violet-800"
        >
          <MessageCircle className="h-4 w-4" />
          Enviar minha receita
        </a>
      </Container>
    </section>
  );
}
