/**
 * Emprendimientos Section Component
 * Design: Light gray background, product cards with image galleries
 * Professional product showcase layout with interactive galleries
 */

import ImageGallery from "./ImageGallery";

export default function EmprendimientosSection() {
  const monchImages = [
    "/manus-storage/monch_1_2d6a0dac.jpg",
    "/manus-storage/monch_2_4f5eb0bc.jpg",
    "/manus-storage/monch_3_8ca404e3.jpg",
    "/manus-storage/monch_4_67594324.jpg",
    "/manus-storage/monch_5_ac751e47.jpg",
  ];

  const dankaiImages = [
    "/manus-storage/dankai_1_64be3661.jpg",
    "/manus-storage/dankai_2_f3638ae8.jpg",
    "/manus-storage/dankai_3_494d7efc.jpg",
    "/manus-storage/dankai_4_21b252e5.jpg",
    "/manus-storage/dankai_5_274b5c3d.jpg",
    "/manus-storage/dankai_6_e9c5dcf0.jpg",
    "/manus-storage/dankai_7_039cc643.jpg",
  ];

  const cinco97Images = [
    "/manus-storage/cinco97_1_7c40c7c1.jpg",
    "/manus-storage/cinco97_2_da9ea8fe.jpg",
    "/manus-storage/cinco97_3_6cc84abb.jpg",
    "/manus-storage/cinco97_4_83940f0e.jpg",
    "/manus-storage/cinco97_5_ef9ea45c.jpg",
    "/manus-storage/cinco97_6_9bf635fa.jpg",
  ];

  const ventures = [
    {
      name: "MONCH",
      tagline: "No es fat food. Es MONCH.",
      description: "Hamburguesas de carne de angus y pan artesanal.",
      images: monchImages,
      color: "bg-red-50",
    },
    {
      name: "DANKAI BROWNIES",
      tagline: "Brownies húmedos · Cuchareables",
      description: "Capricho de la Abuela, Preferido de Mamá, Abrazo de Mamá y cuchareables Redvelvet / Milo.",
      images: dankaiImages,
      color: "bg-amber-50",
    },
    {
      name: "CINCO97",
      tagline: "Restaurante especializado en brochetas.",
      description: "Experiencia culinaria de alta calidad con especialidad en brochetas artesanales.",
      images: cinco97Images,
      color: "bg-slate-50",
    },
  ];

  return (
    <section id="emprendimientos" className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            EMPRENDIMIENTOS GASTRONÓMICOS
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-semibold">
            Dos marcas, dos personalidades.
          </p>
        </div>

        {/* Ventures with Galleries */}
        <div className="space-y-16 md:space-y-20">
          {ventures.map((venture) => (
            <div 
              key={venture.name}
              className={`rounded-lg overflow-hidden ${venture.color}`}
            >
              <div className="p-6 md:p-10">
                {/* Venture Info */}
                <div className="mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    {venture.name}
                  </h3>
                  <p className="text-base md:text-lg font-semibold text-blue-700 mb-3">
                    {venture.tagline}
                  </p>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl">
                    {venture.description}
                  </p>
                </div>

                {/* Image Gallery */}
                <ImageGallery images={venture.images} title={venture.name} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
