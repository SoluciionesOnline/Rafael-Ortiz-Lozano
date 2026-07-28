# Guía de Deployment - Rafael Ortiz Landing Page

## 📋 Requisitos Previos

- Node.js 18 o superior
- pnpm 10 o superior
- Git configurado
- Cuenta en plataforma de hosting (Vercel, Netlify, GitHub Pages, etc.)

## 🚀 Deployment en Vercel (Recomendado)

### Paso 1: Preparar el Proyecto

```bash
# Clonar repositorio
git clone <tu-repo-url>
cd rafael_ortiz_landing

# Instalar dependencias
pnpm install

# Verificar que todo funciona localmente
pnpm dev
```

### Paso 2: Crear Cuenta en Vercel

1. Ir a [vercel.com](https://vercel.com)
2. Registrarse con GitHub, GitLab o Bitbucket
3. Autorizar acceso a tus repositorios

### Paso 3: Importar Proyecto

1. Click en "Add New..." → "Project"
2. Seleccionar el repositorio `rafael_ortiz_landing`
3. Vercel detectará automáticamente que es un proyecto Vite
4. Click en "Deploy"

### Paso 4: Configuración (Opcional)

En la sección "Environment Variables":
- No se requieren variables de entorno para este proyecto
- Las imágenes se cargan desde `/manus-storage/`

### Paso 5: Dominio Personalizado

1. Ir a Settings → Domains
2. Agregar dominio personalizado
3. Configurar DNS según instrucciones de Vercel

## 🚀 Deployment en Netlify

### Paso 1: Build Local

```bash
pnpm build
```

### Paso 2: Conectar con Netlify

**Opción A: Drag & Drop**
1. Ir a [netlify.com](https://netlify.com)
2. Arrastrar carpeta `dist/public` a la zona de drop
3. Listo! Tu sitio está en vivo

**Opción B: Git Integration**
1. Conectar repositorio GitHub
2. Configurar build command: `pnpm build`
3. Configurar publish directory: `dist/public`
4. Click en "Deploy"

## 🚀 Deployment en GitHub Pages

### Paso 1: Configurar Repositorio

```bash
# En package.json, agregar:
"homepage": "https://tu-usuario.github.io/rafael_ortiz_landing"
```

### Paso 2: Build y Deploy

```bash
# Instalar gh-pages
pnpm add -D gh-pages

# Agregar scripts en package.json:
"deploy": "pnpm build && gh-pages -d dist/public"

# Ejecutar deploy
pnpm deploy
```

### Paso 3: Habilitar GitHub Pages

1. Ir a Settings → Pages
2. Seleccionar "Deploy from a branch"
3. Seleccionar rama `gh-pages`
4. Click en "Save"

## 🚀 Deployment Manual en Servidor

### Paso 1: Build

```bash
pnpm build
```

### Paso 2: Transferir Archivos

```bash
# Copiar contenido de dist/public a tu servidor
scp -r dist/public/* usuario@servidor:/var/www/html/
```

### Paso 3: Configurar Servidor Web

**Nginx:**
```nginx
server {
    listen 80;
    server_name tu-dominio.com;
    
    root /var/www/html;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

**Apache:**
```apache
<Directory /var/www/html>
    RewriteEngine On
    RewriteBase /
    RewriteRule ^index\.html$ - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /index.html [L]
</Directory>
```

## 🔒 Configuración de SSL/HTTPS

### Vercel
- Automático con certificado Let's Encrypt

### Netlify
- Automático con certificado Let's Encrypt

### Servidor Manual
```bash
# Usar Certbot
sudo certbot certonly --webroot -w /var/www/html -d tu-dominio.com
```

## 📊 Monitoreo Post-Deployment

### Verificar Performance
```bash
# Lighthouse
npm install -g lighthouse
lighthouse https://tu-dominio.com --view
```

### Verificar Responsividad
- Usar Chrome DevTools
- Probar en diferentes dispositivos
- Validar en [responsivedesignchecker.com](https://responsivedesignchecker.com)

### Monitorear Errores
- Configurar Sentry o similar
- Revisar logs del servidor
- Monitorear Core Web Vitals

## 🔄 Actualizaciones y Mantenimiento

### Actualizar Contenido

```bash
# 1. Hacer cambios locales
# 2. Commit y push
git add .
git commit -m "Actualizar contenido"
git push origin main

# 3. El deployment se ejecutará automáticamente
```

### Actualizar Dependencias

```bash
# Verificar actualizaciones disponibles
pnpm outdated

# Actualizar
pnpm update

# Testear localmente
pnpm dev

# Commit y push
git add .
git commit -m "Actualizar dependencias"
git push origin main
```

## 🐛 Troubleshooting

### Problema: Imágenes no cargan
**Solución**: Verificar que las URLs en `/manus-storage/` sean correctas

### Problema: Estilos no se aplican
**Solución**: Limpiar caché del navegador (Ctrl+Shift+Delete)

### Problema: 404 en rutas internas
**Solución**: Configurar `try_files` en servidor web (ver arriba)

### Problema: Build falla
```bash
# Limpiar cache
pnpm store prune
rm -rf node_modules pnpm-lock.yaml

# Reinstalar
pnpm install

# Intentar build nuevamente
pnpm build
```

## 📞 Soporte

Para problemas con:
- **Vercel**: [vercel.com/support](https://vercel.com/support)
- **Netlify**: [netlify.com/support](https://netlify.com/support)
- **GitHub Pages**: [docs.github.com/pages](https://docs.github.com/pages)

---

**Última actualización**: Julio 28, 2026
