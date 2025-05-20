import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WorkSection from "@/components/WorkSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import CtaSection from "@/components/CtaSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    // Apply scroll event listener for navbar
    const navbar = document.getElementById("navbar");
    const handleScroll = () => {
      if (window.scrollY > 10) {
        navbar?.classList.add("bg-light/95", "backdrop-blur-sm", "shadow-sm");
      } else {
        navbar?.classList.remove("bg-light/95", "backdrop-blur-sm", "shadow-sm");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans bg-light text-dark antialiased">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WorkSection />
      <ProcessSection />
      <TestimonialsSection />
      <AboutSection />
      <CtaSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
