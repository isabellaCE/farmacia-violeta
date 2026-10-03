import Image from "next/image";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { InstagramIcon } from "@/components/decor/InstagramIcon";
import { SITE, whatsappUrl } from "@/lib/site";

const linkClass = "transition-colors hover:text-peach-300";
const headingClass = "font-display text-base font-semibold text-cream";

export function Footer() {
  return (
    <footer
      id="contato"
      className="on-dark relative overflow-hidden bg-violet-950 pt-16 pb-8 text-violet-100/85"
    >
      <Container className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1.1fr]">
        <div>
          <Image
            src="/brand/logo.png"
            alt="Violeta Farmácia com Manipulação"
            width={1395}
            height={613}
            quality={90}
            className="h-20 w-auto"
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Farmácia com manipulação há 30 anos, cuidando de pessoas e pets com
            fórmulas feitas sob medida.
          </p>
          <a
            href={whatsappUrl("prescription")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-peach-500 px-5 py-3 text-sm font-semibold text-violet-950 transition-colors hover:bg-peach-400"
          >
            <MessageCircle className="h-4 w-4" />
            Enviar minha receita
          </a>
        </div>

        <div>
          <p className={headingClass}>Onde estamos</p>
          <ul className="mt-4 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-peach-300" />
              <span>
                {SITE.address.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
                <a
                  href={SITE.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block font-semibold text-cream underline decoration-peach-400 underline-offset-4 hover:text-peach-300"
                >
                  Ver no mapa
                </a>
              </span>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-peach-300" />
              <span>
                {SITE.hours.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </div>

        <div>
          <p className={headingClass}>Fale com a gente</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={`tel:${SITE.phoneTel}`} className={`inline-flex items-center gap-3 ${linkClass}`}>
                <Phone className="h-4 w-4 shrink-0 text-peach-300" />
                {SITE.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className={`inline-flex items-center gap-3 break-all ${linkClass}`}>
                <Mail className="h-4 w-4 shrink-0 text-peach-300" />
                {SITE.email}
              </a>
            </li>
            <li>
              <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-3 ${linkClass}`}
              >
                <InstagramIcon className="h-4 w-4 shrink-0 text-peach-300" />
                {SITE.instagramHandle}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <Container className="mt-12 space-y-1 border-t border-cream/10 pt-6 text-xs text-violet-100/75">
        <p>
          {SITE.name}, CNPJ {SITE.legal.cnpj}
        </p>
        <p>
          Responsável técnico: {SITE.legal.pharmacist}, {SITE.legal.crf}
        </p>
        <p>© {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.</p>
      </Container>
    </footer>
  );
}
