import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import WhyPipebot from "@/components/landing/WhyPipebot";
import FeaturesGrid from "@/components/landing/FeaturesGrid";
import AudienceCards from "@/components/landing/AudienceCards";
import UseCases from "@/components/landing/UseCases";
import MultiTenant from "@/components/landing/MultiTenant";
import Security from "@/components/landing/Security";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <WhyPipebot />
      <FeaturesGrid />
      <AudienceCards />
      <UseCases />
      <MultiTenant />
      <Security />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
