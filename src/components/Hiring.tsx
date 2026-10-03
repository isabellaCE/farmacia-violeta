"use client";

import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SITE, whatsappUrl } from "@/lib/site";

export function Hiring() {
  return (
    <section
      id="vagas"
      className="on-dark relative overflow-hidden bg-violet-900 py-20 text-cream"
    >
      <Container className="relative flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
            Trabalhe conosco: estamos contratando
          </h2>
          <p className="mt-3 text-lg text-violet-100">
            Vagas abertas para Operador de Caixa e Vendedores.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="on-light mt-9 flex flex-col gap-3 rounded-[2rem] bg-cream px-8 py-6 text-violet-950 sm:flex-row sm:items-center sm:gap-8"
        >
          <p className="font-display text-base font-semibold text-violet-900">
            Envie seu currículo
          </p>
          <div className="flex flex-col gap-2 text-sm font-medium sm:flex-row sm:gap-6">
            <a
              href={whatsappUrl("resume")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-violet-700"
            >
              <Phone className="h-4 w-4" />
              WhatsApp {SITE.phoneDisplay}
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="inline-flex items-center gap-2 hover:text-violet-700"
            >
              <Mail className="h-4 w-4" />
              {SITE.email}
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
