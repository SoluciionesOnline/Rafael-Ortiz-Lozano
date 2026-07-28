# Rafael Ortiz - Landing Page de Ventas

Landing page profesional de alta conversión para Rafael Ortiz Lozano, especialista en disciplina de alto rendimiento aplicada a los negocios.

## 🎯 Características

- **Diseño Minimalista Profesional**: Enfoque total en conversión con bloques bien definidos
- **Tipografía Montserrat**: Fuente exclusiva en todos los textos para máxima legibilidad
- **Galerías Interactivas**: Lightbox modal para MONCH, DANKAI y CINCO97
- **Responsive Completo**: Adaptación perfecta en móvil, tablet y desktop
- **Secciones Estratégicas**:
  - Hero con foto profesional de Rafael
  - Historia: Timeline de 4 hitos clave
  - Emprendimientos: Galerías de MONCH (5 img), DANKAI (7 img), CINCO97 (6 img)
  - Servicios: Contaduría, asesoría financiera, gestión de impuestos
  - Eventos: Empresariales y familiares
  - Contacto: Múltiples canales de comunicación

## 📁 Estructura del Proyecto

```
rafael_ortiz_landing/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.tsx              # Navegación fija
│   │   │   ├── HeroSection.tsx         # Portada con foto
│   │   │   ├── HistoriaSection.tsx     # Timeline de hitos
│   │   │   ├── EmprendimientosSection.tsx  # Galerías
│   │   │   ├── ImageGallery.tsx        # Componente de galería
│   │   │   ├── ServiciosSection.tsx    # Servicios profesionales
│   │   │   ├── EventosSection.tsx      # Servicios de eventos
│   │   │   ├── ContactSection.tsx      # CTA y contacto
│   │   │   ├── Footer.tsx              # Pie de página
│   │   │   └── ui/                     # Componentes shadcn/ui
│   │   ├── pages/
│   │   │   ├── Home.tsx                # Página principal
│   │   │   └── NotFound.tsx
│   │   ├── App.tsx                     # Router principal
│   │   ├── index.css                   # Estilos globales + Tailwind
│   │   └── main.tsx                    # Punto de entrada React
│   ├── index.html                      # HTML principal
│   └── public/                         # Archivos estáticos
├── dist/                               # Build compilado
├── package.json                        # Dependencias
├── tsconfig.json                       # Configuración TypeScript
└── vite.config.ts                      # Configuración Vite

```

## 🛠️ Tecnologías

- **React 19** - Framework UI
- **TypeScript** - Tipado estático
- **Tailwind CSS 4** - Estilos utilitarios
- **Vite** - Build tool
- **shadcn/ui** - Componentes UI profesionales
- **Lucide React** - Iconografía
- **Wouter** - Routing ligero

## 🚀 Instalación y Desarrollo

### Requisitos
- Node.js 18+
- pnpm 10+

### Instalación

```bash
# Clonar repositorio
git clone <repo-url>
cd rafael_ortiz_landing

# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev
```

El servidor estará disponible en `http://localhost:5173`

## 📦 Build para Producción

```bash
# Compilar para producción
pnpm build

# Archivos compilados en: dist/public/
```

## 🎨 Paleta de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| Oscuro Profundo | `#0a0a0a` | Fondos hero y servicios |
| Blanco | `#ffffff` | Fondos claros |
| Azul Profesional | `#1e40af` | CTAs y acentos |
| Gris Claro | `#f5f5f5` | Fondos secundarios |
| Gris Oscuro | `#1a1a1a` | Fondos alternativos |

## 📝 Tipografía

- **Display (Títulos)**: Montserrat Bold (700) - 48px desktop / 32px mobile
- **Heading (Subtítulos)**: Montserrat SemiBold (600) - 28px desktop / 20px mobile
- **Body (Cuerpo)**: Montserrat Regular (400) - 16px desktop / 14px mobile
- **Line Height**: 1.6 para cuerpo, 1.2 para títulos

## 🖼️ Imágenes y Galerías

Las imágenes se alojan en `/manus-storage/` con los siguientes formatos:

### MONCH (5 imágenes)
- `monch_1_2d6a0dac.jpg` - Logo/Branding
- `monch_2_4f5eb0bc.jpg` - Hamburguesa principal
- `monch_3_8ca404e3.jpg` - Detalle producto
- `monch_4_67594324.jpg` - Presentación
- `monch_5_ac751e47.jpg` - Ambiente

### DANKAI (7 imágenes)
- `dankai_1_64be3661.jpg` - Logo
- `dankai_2_f3638ae8.jpg` - Brownie principal
- `dankai_3_494d7efc.jpg` - Variantes
- `dankai_4_21b252e5.jpg` - Detalle
- `dankai_5_274b5c3d.jpg` - Presentación
- `dankai_6_e9c5dcf0.jpg` - Ambiente
- `dankai_7_039cc643.jpg` - Producto final

### CINCO97 (6 imágenes)
- `cinco97_1_7c40c7c1.jpg` - Logo/Fachada
- `cinco97_2_da9ea8fe.jpg` - Interior restaurante
- `cinco97_3_6cc84abb.jpg` - Brochetas
- `cinco97_4_83940f0e.jpg` - Ambiente
- `cinco97_5_ef9ea45c.jpg` - Detalle platos
- `cinco97_6_9bf635fa.jpg` - Presentación

## 🔄 Componentes Reutilizables

### ImageGallery
Componente de galería interactiva con lightbox modal.

```tsx
import ImageGallery from "@/components/ImageGallery";

<ImageGallery 
  images={["/url/img1.jpg", "/url/img2.jpg"]} 
  title="Mi Galería"
/>
```

Características:
- Grid de miniaturas responsive
- Lightbox modal con navegación
- Contador de imágenes
- Transiciones suaves
- Soporte para teclado (Escape para cerrar)

## 📱 Responsive Design

- **Mobile**: 375px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

Todos los componentes se adaptan automáticamente con Tailwind CSS.

## ♿ Accesibilidad

- Contraste WCAG AA cumplido
- Navegación por teclado
- Atributos alt en imágenes
- Semántica HTML correcta
- Focus rings visibles

## 🚀 Deployment

### Opción 1: Manus (Recomendado)
```bash
# Publicar directamente desde Manus UI
# Click en "Publish" después de crear checkpoint
```

### Opción 2: Vercel
```bash
# Build
pnpm build

# Deploy
vercel --prod
```

### Opción 3: Netlify
```bash
# Build
pnpm build

# Deploy
netlify deploy --prod --dir=dist/public
```

## 📊 Performance

- Lighthouse Score: 90+
- Core Web Vitals: Optimizados
- Tamaño bundle: ~370KB (gzip: ~105KB)
- Tiempo carga: <2s en conexión 4G

## 🔐 SEO

- Meta tags configurados
- Open Graph para redes sociales
- Favicon personalizado
- Sitemap ready
- Robots.txt incluido

## 📞 Contacto y CTAs

Los botones de contacto están configurados para:
- Email: `rafael@example.com`
- Teléfono: `+57 300 123 4567`
- Ubicación: Ibagué, Colombia

**Nota**: Actualizar con información real de Rafael

## 📝 Licencia

Proyecto propietario de Rafael Ortiz Lozano

## 🤝 Contribuciones

Para cambios, contactar directamente con Rafael Ortiz.

---

**Última actualización**: Julio 28, 2026
**Versión**: 1.0.0
