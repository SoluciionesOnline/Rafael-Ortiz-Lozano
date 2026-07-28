/**
 * Hero Section Component
 * Design: Dark background (#0a0a0a), white text, professional typography
 * Large display text with supporting copy and CTA
 */

import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 bg-gray-900 text-white overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url('/manus-storage/hero_background_a37acdd4.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      {/* Content */}
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Text */}
          <div className="max-w-2xl">
            {/* Main Title */}
            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
              RAFAEL ORTIZ LOZANO
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl font-semibold text-blue-300 mb-6">
              Disciplina de alto rendimiento, aplicada a los negocios.
            </p>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed max-w-xl">
              Waterpolista de selección Colombia, Contador Público, y emprendedor CEO detrás de MONCH y DANKAI. Hoy pone esa misma exigencia al servicio de tus finanzas y tus eventos.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base px-8 py-6"
              >
                Agenda tu consulta
              </Button>
              <Button 
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-semibold text-base px-8 py-6"
              >
                Conoce más
              </Button>
            </div>
          </div>

          {/* Right Column - Rafael Photo */}
          <div className="hidden md:flex justify-center">
            <img 
              src="/manus-storage/rafael_hero_f27608f4.jpg" 
              alt="Rafael Ortiz en piscina olímpica" 
              className="rounded-lg shadow-2xl max-w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Desktop */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:flex">
        <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      {/* Scroll Indicator - Mobile */}
      <div className="md:hidden absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
