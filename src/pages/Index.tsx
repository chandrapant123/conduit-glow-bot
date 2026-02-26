import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import PainPoints from "@/components/landing/PainPoints";
import WhyPipebot from "@/components/landing/WhyPipebot";
import FeaturesGrid from "@/components/landing/FeaturesGrid";
import AIHighlight from "@/components/landing/AIHighlight";
import MarketingSection from "@/components/landing/MarketingSection";
import SalesSupport from "@/components/landing/SalesSupport";
import AudienceCards from "@/components/landing/AudienceCards";
import EcommerceSection from "@/components/landing/EcommerceSection";
import StatsSection from "@/components/landing/StatsSection";
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
      <PainPoints />
      <WhyPipebot />
      <FeaturesGrid />
      <AIHighlight />
      <MarketingSection />
      <SalesSupport />
      <AudienceCards />
      <EcommerceSection />
      <StatsSection />
      <UseCases />
      <MultiTenant />
      <Security />
      <CTASection />
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Pipebot",
        "applicationCategory": "BusinessApplication",
        "description": "AI-powered WhatsApp & Messaging Automation Platform for Sales, Support & Marketing",
        "url": "https://conduit-glow-bot.lovable.app",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
      }) }} />
    </div>
  );
};

export default Index;
