/**
 * Footer Component
 * Design: Dark background, minimal footer with links and copyright
 */

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 border-t border-gray-800">
      <div className="container py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/manus-storage/rafael_ortiz_logo_35629cca.png" 
                alt="Rafael Ortiz Logo" 
                className="w-6 h-6"
              />
              <span className="font-bold text-white">RAFAEL ORTIZ</span>
            </div>
            <p className="text-sm text-gray-500">
              Disciplina de alto rendimiento, aplicada a los negocios.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Navegación</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#historia" className="hover:text-blue-400 transition-colors">
                  Historia
                </a>
              </li>
              <li>
                <a href="#emprendimientos" className="hover:text-blue-400 transition-colors">
                  Emprendimientos
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-blue-400 transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#eventos" className="hover:text-blue-400 transition-colors">
                  Eventos
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:rafael@example.com" className="hover:text-blue-400 transition-colors">
                  rafael@example.com
                </a>
              </li>
              <li>
                <a href="tel:+573001234567" className="hover:text-blue-400 transition-colors">
                  +57 300 123 4567
                </a>
              </li>
              <li>Ibagué, Colombia</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>
              &copy; {new Date().getFullYear()} Rafael Ortiz. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-blue-400 transition-colors">
                Política de privacidad
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Términos de servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
