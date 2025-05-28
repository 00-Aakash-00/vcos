"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { WorkflowSection } from "@/components/sections/workflow-section";
import { BenefitsSection } from "@/components/sections/benefits-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { ContactForm } from "@/components/sections/contact-form";
import { FutureSection } from "@/components/sections/future-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CtaSection } from "@/components/sections/cta-section";

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-ink-900 text-white-100">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <WorkflowSection />
      <BenefitsSection />
      <ContactForm />
      <FutureSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
