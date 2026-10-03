"use client";

import { motion } from "framer-motion";
import { PawPrint, Stethoscope, ClipboardCheck, FlaskConical, MessageCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { asset } from "@/lib/asset";
import { whatsappUrl } from "@/lib/site";

const CHIPS: { icon: LucideIcon; label: string }[] = [
  { icon: Stethoscope, label: "Dermatológicos VET" },
  { icon: ClipboardCheck, label: "Conforme prescrição" },
  { icon: FlaskConical, label: "Fórmulas personalizadas" },
];

export function PetSection() {
  return (
    <section id="pet" className="relative overflow-hidden bg-peach-100 py-24">
      <Container className="relative grid gap-14 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative order-2 mx-auto w-[min(100%,20rem)] lg:order-1 lg:w-[23rem]"
        >
          <PawPrint
            aria-hidden="true"
            className="absolute -right-6 -top-6 z-0 h-14 w-14 -rotate-12 text-violet-700/40"
          />
          <VideoPlayer
            src={asset("/assets/pets.mp4")}
            poster={asset("/assets/pets-poster.webp")}
            title="Vídeo sobre cuidados dermatológicos para pets"
            className="relative z-10 rounded-[2rem] shadow-2xl shadow-violet-900/25 ring-1 ring-violet-900/10"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="order-1 lg:order-2"
        >
          <h2 className="font-display text-3xl font-semibold leading-tight text-violet-950 sm:text-4xl lg:text-5xl">
            Cuidados dermatológicos também para o seu pet
          </h2>
          <p className="mt-5 max-w-lg text-lg text-violet-900/85">
            Coceiras, irritações, alergias e lesões na pele devem sempre ser avaliadas
            por um médico-veterinário. Quando indicado, os manipulados dermatológicos
            VET podem fazer parte do tratamento, com fórmulas personalizadas conforme a
            prescrição.
          </p>

          <ul className="mt-7 flex flex-wrap gap-3">
            {CHIPS.map((chip) => (
              <li
                key={chip.label}
                className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-violet-900"
              >
                <chip.icon className="h-4 w-4 text-violet-700" />
                {chip.label}
              </li>
            ))}
          </ul>

          <a
            href={whatsappUrl("pet")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-violet-900 px-6 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-violet-800"
          >
            <MessageCircle className="h-4 w-4" />
            Consultar para meu pet
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
