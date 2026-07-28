/**
 * Contact Section Component
 * Design: Dark background, white text, strong CTA focus
 * High-conversion contact section
 */

import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <section id="contacto" className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para llevar tu negocio al siguiente nivel?
          </h2>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            Contáctame para agendar una consulta personalizada. Analicemos juntos cómo puedo ayudarte a alcanzar tus objetivos con disciplina y rigor profesional.
          </p>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 bg-gray-800 rounded-lg border border-gray-700">
              <div className="text-3xl mb-3">📧</div>
              <p className="text-sm text-gray-400 mb-2">Email</p>
              <a href="mailto:rafael@example.com" className="text-blue-400 hover:text-blue-300 font-semibold">
                rafael@example.com
              </a>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg border border-gray-700">
              <div className="text-3xl mb-3">📱</div>
              <p className="text-sm text-gray-400 mb-2">Teléfono</p>
              <a href="tel:+573001234567" className="text-blue-400 hover:text-blue-300 font-semibold">
                +57 300 123 4567
              </a>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg border border-gray-700">
              <div className="text-3xl mb-3">📍</div>
              <p className="text-sm text-gray-400 mb-2">Ubicación</p>
              <p className="text-blue-400 font-semibold">
                Ibagué, Colombia
              </p>
            </div>
          </div>

          {/* Primary CTA */}
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-10 py-6 mb-4"
          >
            Agenda una consulta ahora
          </Button>

          {/* Secondary Info */}
          <p className="text-sm text-gray-400">
            Respondo en menos de 24 horas. Tu éxito es mi prioridad.
          </p>
        </div>
      </div>
    </section>
  );
}
