"use client";

import Image from "next/image";
import { MessageCircle, ArrowRight, FlaskConical, PawPrint, Microscope } from "lucide-react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { whatsappUrl } from "@/lib/site";

const EASE = [0.16, 1, 0.3, 1] as const;

const CHIPS: {
  icon: LucideIcon;
  label: string;
  position: string;
  floatDelay: number;
}[] = [
  {
    icon: FlaskConical,
    label: "Dosagem individualizada",
    position: "left-0 top-[1%] sm:left-[2%]",
    floatDelay: 0,
  },
  {
    icon: PawPrint,
    label: "Humana e veterinária",
    position: "hidden lg:block lg:right-[3%] lg:top-[76%]",
    floatDelay: 1.2,
  },
  {
    icon: Microscope,
    label: "Análise de cada lote",
    position: "bottom-[2%] left-[3%] sm:bottom-[3%] sm:left-[6%]",
    floatDelay: 2.4,
  },
];

function FloatingChip({
  icon: Icon,
  label,
  position,
  floatDelay,
  index,
}: (typeof CHIPS)[number] & { index: number }) {
  return (
    <motion.div
      className={`absolute z-20 ${position}`}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.7 + index * 0.12, ease: EASE }}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: floatDelay }}
        className="flex items-center gap-2.5 rounded-full bg-white py-2 pl-2 pr-4 text-xs font-semibold text-violet-950 shadow-lg shadow-violet-900/15 ring-1 ring-violet-900/5 sm:gap-3 sm:py-2.5 sm:pl-2.5 sm:pr-5 sm:text-sm"
      >
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-peach-100 text-peach-700 sm:h-8 sm:w-8">
          <Icon className="h-4 w-4" strokeWidth={2.25} />
        </span>
        {label}
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Brilhos suaves de pêssego e menta em largura total, sem moldura. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          maskImage: "linear-gradient(to bottom, black 65%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 65%, transparent 100%)",
          backgroundImage: [
            "radial-gradient(42% 70% at 74% 42%, rgb(255 255 255 / 0.75), transparent 72%)",
            "radial-gradient(45% 55% at 66% 105%, rgb(225 241 227 / 0.95), transparent 72%)",
            "radial-gradient(40% 55% at 6% 25%, rgb(253 244 234 / 0.9), transparent 70%)",
          ].join(","),
        }}
      />

      <Container className="relative">
        <div className="grid items-center gap-6 pt-12 pb-12 sm:pt-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-6 lg:pt-20 lg:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="relative z-10"
          >
            <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-violet-950 sm:text-5xl lg:text-[3.6rem]">
              Cada fórmula, feita sob medida
              <span className="text-peach-800"> para você.</span>
            </h1>

            <p className="mt-6 max-w-md text-lg text-violet-900/85">
              Manipulação humana e veterinária com precisão farmacêutica, dosagem
              individualizada e o cuidado de quem acompanha famílias e seus pets
              há três décadas.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a
                href={whatsappUrl("prescription")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-violet-900 px-7 py-4 text-sm font-semibold text-cream shadow-lg shadow-violet-900/25 transition-colors hover:bg-violet-800"
              >
                <MessageCircle className="h-4 w-4" />
                Enviar minha receita
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center gap-2 text-sm font-semibold text-violet-900 underline decoration-peach-600 decoration-2 underline-offset-4 transition-colors hover:text-violet-700"
              >
                Conhecer serviços
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
            className="relative mx-auto w-full max-w-xl lg:w-[118%] lg:max-w-none"
          >
            <Image
              src="/hero/hero-products.webp"
              alt="Frascos de manipulação da Violeta, EVA 360 e Fitaxin, ao lado de um polivitamínico e cápsulas"
              width={1385}
              height={954}
              preload
              quality={90}
              sizes="(min-width: 1024px) 48vw, (min-width: 640px) 36rem, 100vw"
              className="relative z-10 h-auto w-full select-none"
            />
            {CHIPS.map((chip, i) => (
              <FloatingChip key={chip.label} {...chip} index={i} />
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
