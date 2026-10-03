"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

const REASONS = [
  {
    title: "Dosagem sob medida",
    text: "A quantidade de ativo que a sua receita pede, ajustada ao seu tratamento.",
  },
  {
    title: "Opções sem excipientes indesejados",
    text: "Formulações sem corantes, lactose ou glúten para quem tem restrições e alergias. Fale com a nossa equipe.",
  },
  {
    title: "Combinação de ativos",
    text: "Vários princípios ativos reunidos em uma única cápsula, do jeito que o seu médico prescreveu.",
  },
  {
    title: "Pensada para a sua rotina",
    text: "Formas farmacêuticas que facilitam o dia a dia e o gosto de quem vai tomar.",
  },
];

export function WhyCompound() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-cream py-24">
      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h2 className="font-display text-3xl font-semibold leading-tight text-violet-950 sm:text-4xl">
            Seu medicamento, feito exatamente para você
          </h2>
          <p className="mt-4 text-lg text-violet-900/85">
            Cada fórmula passa por farmacêuticos especializados antes de chegar até você.
          </p>
        </motion.div>

        <dl className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {REASONS.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
              className="border-t border-violet-900/20 pt-5"
            >
              <dt className="font-display text-xl font-semibold text-violet-950">
                {reason.title}
              </dt>
              <dd className="mt-2 max-w-md leading-relaxed text-violet-900/85">{reason.text}</dd>
            </motion.div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
