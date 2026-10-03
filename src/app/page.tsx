import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ThirtyYears } from "@/components/ThirtyYears";
import { WhyCompound } from "@/components/WhyCompound";
import { Services } from "@/components/Services";
import { PetSection } from "@/components/PetSection";
import { HowItWorks } from "@/components/HowItWorks";
import { Differentials } from "@/components/Differentials";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { WaveDivider } from "@/components/ui/WaveDivider";

export default function Home() {
  return (
    <>
      <Header />
      <main id="conteudo">
        <div className="relative bg-gradient-to-b from-peach-50 via-peach-100 to-peach-200">
          <Hero />
          <WaveDivider className="-mb-px text-violet-900" />
        </div>
        <ThirtyYears />
        <WhyCompound />
        <Services />
        <PetSection />
        <HowItWorks />
        <Differentials />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
