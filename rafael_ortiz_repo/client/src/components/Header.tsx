/**
 * Header Component
 * Professional minimalist header with logo and navigation
 * Design: Montserrat typography, clean layout, professional blue accent
 */

import { Button } from "@/components/ui/button";

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <img 
            src="/manus-storage/rafael_ortiz_logo_35629cca.png" 
            alt="Rafael Ortiz Logo" 
            className="w-8 h-8"
          />
          <div className="hidden sm:flex flex-col">
            <span className="text-sm font-bold text-gray-900">RAFAEL</span>
            <span className="text-xs font-semibold text-blue-700">ORTIZ</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection("historia")}
            className="text-sm font-medium text-gray-700 hover:text-blue-700 transition-colors"
          >
            Historia
          </button>
          <button 
            onClick={() => scrollToSection("emprendimientos")}
            className="text-sm font-medium text-gray-700 hover:text-blue-700 transition-colors"
          >
            Emprendimientos
          </button>
          <button 
            onClick={() => scrollToSection("servicios")}
            className="text-sm font-medium text-gray-700 hover:text-blue-700 transition-colors"
          >
            Servicios
          </button>
          <button 
            onClick={() => scrollToSection("eventos")}
            className="text-sm font-medium text-gray-700 hover:text-blue-700 transition-colors"
          >
            Eventos
          </button>
        </nav>

        {/* CTA Button */}
        <Button 
          className="bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm"
          onClick={() => scrollToSection("contacto")}
        >
          Contacta
        </Button>
      </div>
    </header>
  );
}
