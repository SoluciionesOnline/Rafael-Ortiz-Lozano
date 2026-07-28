/**
 * Historia Section Component
 * Design: White background, dark text, numbered timeline layout
 * Professional typography with Montserrat weights
 */

export default function HistoriaSection() {
  const milestones = [
    {
      number: "01",
      title: "Waterpolista de alto rendimiento",
      description: "Selección Tolima y selección Colombia de waterpolo. Múltiples reconocimientos MVP, medallas de bronce y plata en torneos nacionales.",
    },
    {
      number: "02",
      title: "Contador Público",
      description: "Título de la Universidad de Ibagué, con tarjeta profesional vigente.",
    },
    {
      number: "03",
      title: "Emprendedor gastronómico",
      description: "Fundador y CEO de CINCO97, MONCH y DANKAI restaurantes en Ibagué — experiencia directa en gestión y operación del sector gastronómico de la región. Hoy lidera dos marcas activas de gastronomía.",
    },
    {
      number: "04",
      title: "Productor eventos",
      description: "Organización y montaje de eventos familiares y empresariales.",
    },
  ];

  return (
    <section id="historia" className="py-16 md:py-24 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">HISTORIA</h2>
          <p className="text-lg md:text-xl text-gray-600 font-semibold mb-2">Trayectoria</p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl">
            De la piscina a la mesa, del aula a la cocina. Cuatro momentos que explican por qué a Rafael no le asusta liderar bajo presión — y por qué eso importa para quien contrata su trabajo.
          </p>
        </div>

        {/* Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {milestones.map((milestone) => (
            <div key={milestone.number} className="flex gap-6">
              {/* Number */}
              <div className="flex-shrink-0">
                <span className="text-5xl md:text-6xl font-bold text-blue-700 opacity-20">
                  {milestone.number}
                </span>
              </div>
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                  {milestone.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
