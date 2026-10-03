import type { Metadata } from "next";
import { Fredoka, Poppins } from "next/font/google";
import { MotionProvider } from "@/components/MotionProvider";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Violeta Farmácia com Manipulação | 30 anos cuidando de você e do seu pet",
  description:
    "Há 30 anos manipulando fórmulas com precisão e carinho. Manipulação humana e veterinária sob medida para cada necessidade.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${fredoka.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-violet-950 overflow-x-hidden">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-violet-900 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-cream"
        >
          Pular para o conteúdo
        </a>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
