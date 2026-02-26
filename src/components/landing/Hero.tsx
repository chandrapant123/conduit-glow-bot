import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import carouselBanner1 from "@/assets/carousel-banner-1.png";
import carouselBanner2 from "@/assets/carousel-banner-2.png";
import carouselBanner3 from "@/assets/carousel-banner-3.png";

const slides = [
  {
    image: carouselBanner1,
    title: "Automate WhatsApp.",
    highlight: "Convert More Customers.",
    description: "AI-powered WhatsApp & messaging automation platform built for sales, support, and marketing teams.",
  },
  {
    image: carouselBanner2,
    title: "Smart AI Chatbots.",
    highlight: "Qualify Leads Instantly.",
    description: "Train AI with your data — PDFs, CSV, knowledge base. Auto-qualify leads and book appointments 24/7.",
  },
  {
    image: carouselBanner3,
    title: "Bulk Campaigns.",
    highlight: "Drive Revenue at Scale.",
    description: "Launch targeted WhatsApp broadcasts, drip campaigns, and abandoned cart recovery flows.",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 pb-16">
      {/* Light background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-6">
                  <span className="text-foreground">{slide.title}</span>
                  <br />
                  <span className="text-gradient-hero">{slide.highlight}</span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-10">
                  {slide.description}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/signup" className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg btn-glow hover:brightness-110 transition text-center">
                Start Free Trial
              </a>
              <a href="/contact" className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition-colors text-center">
                Book Live Demo
              </a>
            </div>

            <p className="text-sm text-muted-foreground mt-4">
              No Credit Card Required · Setup in 5 Minutes
            </p>

            {/* Dots */}
            <div className="flex gap-2 mt-8">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right: Carousel Image */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 60, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -60, scale: 0.95 }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl overflow-hidden shadow-2xl border border-border"
              >
                <img
                  src={slide.image}
                  alt={`${slide.title} ${slide.highlight}`}
                  className="w-full h-auto min-h-[350px] md:min-h-[450px] object-cover"
                  loading="eager"
                />
              </motion.div>
            </AnimatePresence>

            {/* Nav arrows */}
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur border border-border rounded-full p-2 shadow-lg hover:bg-card transition"
            >
              <ChevronLeft className="text-foreground" size={22} />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur border border-border rounded-full p-2 shadow-lg hover:bg-card transition"
            >
              <ChevronRight className="text-foreground" size={22} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
