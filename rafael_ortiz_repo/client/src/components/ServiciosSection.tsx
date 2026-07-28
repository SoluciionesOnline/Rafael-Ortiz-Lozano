/**
 * Servicios Section Component
 * Design: Dark background (#1a1a1a), white text, service cards
 * Professional service showcase with clear descriptions
 */

export default function ServiciosSection() {
  const services = [
    {
      category: "Contaduría",
      items: [
        {
          title: "Contador Público titulado",
          description: "Tarjeta profesional vigente",
        },
      ],
    },
    {
      category: "Asesoría financiera y gerencial",
      items: [
        {
          title: "Orientación estratégica",
          description: "Basada en los números del negocio para tomar mejores decisiones de crecimiento.",
        },
      ],
    },
    {
      category: "Gestión de impuestos",
      items: [
        {
          title: "Contabilidad fiscal",
          description: "Preparación y presentación de declaraciones de impuestos obligatorias ante las autoridades tributarias.",
        },
      ],
    },
    {
      category: "Contabilidad de costos",
      items: [
        {
          title: "Análisis de costos",
          description: "Análisis detallado de lo que cuesta producir un bien o prestar un servicio para fijar precios y mejorar ganancias.",
        },
      ],
    },
  ];

  return (
    <section id="servicios" className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="container">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">SERVICIOS PROFESIONALES</h2>
          <p className="text-lg md:text-xl text-gray-300 font-semibold">
            Soluciones contables y de asesoría para tu negocio
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div 
              key={service.category}
              className="p-6 md:p-8 border border-gray-700 rounded-lg hover:border-blue-500 transition-colors duration-300"
            >
              <h3 className="text-xl md:text-2xl font-bold text-blue-400 mb-4">
                {service.category}
              </h3>
              {service.items.map((item) => (
                <div key={item.title} className="mb-4">
                  <h4 className="text-base md:text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 md:mt-16 text-center">
          <p className="text-base md:text-lg text-gray-300 mb-6">
            ¿Necesitas asesoría personalizada?
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300">
            Solicita una consulta
          </button>
        </div>
      </div>
    </section>
  );
}
