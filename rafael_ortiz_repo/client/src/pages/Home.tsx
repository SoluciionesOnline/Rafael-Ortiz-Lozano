/**
 * Home Page - Rafael Ortiz Landing Page
 * Design: Minimalist professional layout with alternating dark/light sections
 * Typography: Montserrat throughout, with bold hierarchy
 * Colors: Dark gray (#0a0a0a), white, blue (#1e40af) accents
 */

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HistoriaSection from "@/components/HistoriaSection";
import EmprendimientosSection from "@/components/EmprendimientosSection";
import ServiciosSection from "@/components/ServiciosSection";
import EventosSection from "@/components/EventosSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <HistoriaSection />
        <EmprendimientosSection />
        <ServiciosSection />
        <EventosSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
