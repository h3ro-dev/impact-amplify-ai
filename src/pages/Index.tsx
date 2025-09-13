import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import FrustrationSection from "@/components/FrustrationSection";
import SolutionSection from "@/components/SolutionSection";
import SocialProofSection from "@/components/SocialProofSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import ConversionForm from "@/components/ConversionForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <FrustrationSection />
      <SolutionSection />
      <SocialProofSection />
      <CapabilitiesSection />
      <ConversionForm />
      <Footer />
    </div>
  );
};

export default Index;
