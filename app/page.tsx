import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import HowItWorks from "@/components/sections/HowItWorks";
import WhyInvictus from "@/components/sections/WhyInvictus";
import BenefitsSection from "@/components/sections/BenefitsSection";
import ServiceArea from "@/components/sections/ServiceArea";
import PilotSection from "@/components/sections/PilotSection";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <TrustBar />
      <HowItWorks />
      <WhyInvictus />
      <BenefitsSection />
      <ServiceArea />
      <PilotSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
