"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SITE, whatsappUrl } from "@/lib/site";

const linkClass =
  "underline decoration-violet-900/30 underline-offset-4 transition-colors hover:text-violet-700 hover:decoration-violet-700";

export function Contact() {
  return (
    <section id="contato" className="relative overflow-hidden bg-peach-50 py-24">
      <Container className="relative grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl font-semibold leading-tight text-violet-950 sm:text-4xl">
            Estamos por perto para cuidar de você
          </h2>
          <p className="mt-4 max-w-md text-lg text-violet-900/85">
            Tire dúvidas, envie sua receita ou agende um atendimento personalizado
            com a nossa equipe.
          </p>

          <a
            href={whatsappUrl("prescription")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-violet-900 px-6 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-violet-800"
          >
            <MessageCircle className="h-4 w-4" />
            Enviar minha receita
          </a>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="grid gap-x-10 gap-y-8 sm:grid-cols-2"
        >
          <div className="border-t border-violet-900/20 pt-5">
            <dt className="flex items-center gap-2 font-display text-base font-semibold text-violet-950">
              <MapPin className="h-5 w-5 text-peach-700" strokeWidth={2} />
              Endereço
            </dt>
            <dd className="mt-2 space-y-0.5 text-violet-900/85">
              {SITE.address.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p className="pt-1">
                <a
                  href={SITE.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-sm font-semibold ${linkClass}`}
                >
                  Ver no mapa
                </a>
              </p>
            </dd>
          </div>

          <div className="border-t border-violet-900/20 pt-5">
            <dt className="flex items-center gap-2 font-display text-base font-semibold text-violet-950">
              <Clock className="h-5 w-5 text-peach-700" strokeWidth={2} />
              Horário
            </dt>
            <dd className="mt-2 space-y-0.5 text-violet-900/85">
              {SITE.hours.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </dd>
          </div>

          <div className="border-t border-violet-900/20 pt-5">
            <dt className="flex items-center gap-2 font-display text-base font-semibold text-violet-950">
              <Phone className="h-5 w-5 text-peach-700" strokeWidth={2} />
              Telefone / WhatsApp
            </dt>
            <dd className="mt-2 text-violet-900/85">
              <a href={`tel:${SITE.phoneTel}`} className={linkClass}>
                {SITE.phoneDisplay}
              </a>
            </dd>
          </div>

          <div className="border-t border-violet-900/20 pt-5">
            <dt className="flex items-center gap-2 font-display text-base font-semibold text-violet-950">
              <Mail className="h-5 w-5 text-peach-700" strokeWidth={2} />
              E-mail
            </dt>
            <dd className="mt-2 break-words text-violet-900/85">
              <a href={`mailto:${SITE.email}`} className={linkClass}>
                {SITE.email}
              </a>
            </dd>
          </div>
        </motion.dl>
      </Container>
    </section>
  );
}
