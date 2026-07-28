# Quick Start Guide - Rafael Ortiz Landing Page

## ⚡ Inicio Rápido (5 minutos)

### 1. Clonar y Instalar

```bash
git clone https://github.com/tu-usuario/rafael_ortiz_landing.git
cd rafael_ortiz_landing
pnpm install
```

### 2. Ejecutar Localmente

```bash
pnpm dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

### 3. Hacer Cambios

Edita archivos en `client/src/` y verás los cambios en tiempo real.

### 4. Build para Producción

```bash
pnpm build
```

Los archivos compilados estarán en `dist/public/`

### 5. Deploy

Sube a Vercel, Netlify o tu servidor preferido (ver DEPLOYMENT.md)

---

## 📝 Cambios Comunes

### Cambiar Información de Contacto

Edita `client/src/components/ContactSection.tsx`:

```tsx
<a href="mailto:tu-email@example.com" className="...">
  tu-email@example.com
</a>
```

### Agregar Nueva Sección

1. Crea nuevo archivo en `client/src/components/MiSeccion.tsx`
2. Importa en `client/src/pages/Home.tsx`
3. Agrega el componente en el JSX

### Cambiar Colores

Edita `client/src/index.css`:

```css
:root {
  --primary: #1e40af;  /* Cambiar aquí */
  --background: #ffffff;
  /* ... */
}
```

### Actualizar Imágenes

Las imágenes se cargan desde `/manus-storage/`. Para cambiarlas:

1. Sube nuevas imágenes a tu almacenamiento
2. Actualiza las URLs en los componentes

---

## 🎯 Estructura de Carpetas

```
client/src/
├── components/        # Componentes reutilizables
├── pages/            # Páginas principales
├── App.tsx           # Router
├── index.css         # Estilos globales
└── main.tsx          # Punto de entrada
```

---

## 🔧 Comandos Útiles

| Comando | Descripción |
|---------|-------------|
| `pnpm dev` | Inicia servidor de desarrollo |
| `pnpm build` | Compila para producción |
| `pnpm preview` | Previsualiza build |
| `pnpm check` | Verifica tipos TypeScript |
| `pnpm format` | Formatea código |

---

## 📚 Documentación Completa

- **README.md** - Descripción general del proyecto
- **DEPLOYMENT.md** - Guías de deployment
- **ideas.md** - Filosofía de diseño

---

## 💡 Tips

- Usa Tailwind CSS para estilos (no CSS personalizado)
- Componentes de shadcn/ui ya están disponibles
- Las imágenes deben estar en `/manus-storage/`
- Siempre testea en mobile antes de publicar

---

**¿Necesitas ayuda?** Consulta la documentación o crea un issue en GitHub.
