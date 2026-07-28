/**
 * Eventos Section Component
 * Design: White background, dark text, event service cards
 * Professional event showcase layout
 */

export default function EventosSection() {
  const eventTypes = [
    {
      title: "Eventos empresariales",
      description: "Lanzamientos, activaciones de marca, celebraciones corporativas. Incluye planificación estratégica, coordinación de logística, montaje profesional y ejecución impecable.",
      icon: "🏢",
    },
    {
      title: "Eventos familiares y sociales",
      description: "Cumpleaños, aniversarios y celebraciones especiales. Servicio integral que incluye montaje, decoración temática, logística completa y coordinación de detalles.",
      icon: "🎉",
    },
  ];

  return (
    <section id="eventos" className="py-16 md:py-24 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">EVENTOS</h2>
          <p className="text-lg md:text-xl text-gray-600 font-semibold">
            Organización y montaje de eventos de impacto
          </p>
        </div>

        {/* Event Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {eventTypes.map((event) => (
            <div 
              key={event.title}
              className="p-8 md:p-10 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl mb-4">{event.icon}</div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {event.title}
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                {event.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 md:mt-16 p-8 md:p-10 bg-gray-50 rounded-lg border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Por qué confiar en Rafael?
          </h3>
          <ul className="space-y-3 text-base md:text-lg text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span>Experiencia comprobada en gestión bajo presión</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span>Atención al detalle y coordinación impecable</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span>Disciplina profesional en cada proyecto</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span>Resultados medibles y satisfacción garantizada</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
