# Escuela de Alexandría — Plataforma Web & Blog Académico

Sitio web y blog de investigación de la **Escuela de Alexandría**, recreado con una arquitectura moderna en frontend puro (**React 19 + TypeScript + Vite + Tailwind CSS v4**), optimizado para velocidad, diseño editorial clásico, CI/CD automatizado e integración directa con su canal oficial de YouTube.

---

## 🏛️ Características Principales

- **Frontend Estático & Autónomo:** Cero dependencias de base de datos o servidores backend. Carga ultrarrápida en cualquier red.
- **Identidad Visual Clásica:** Paleta de colores en marrón arcáico (`#3b261b`), pergamino (`#faf7f0` / `#f2ede2`), dorados (`#c59a3f`) y acentos en rojo lacre (`#8b261e`).
- **Portada con Parallax:** Fondo difuminado de la superficie del desierto de Qumrán con desplazamiento dinámico suave.
- **Sección EDUCACIÓN Completa:**
  - 🏛️ **Brochure & Malla Curricular 2026-2027 (`/seminarios`):** Presentación oficial de las áreas académicas (Divinidad, Filología, Eclesiología, Historia y Lenguas Bíblicas) con visor de ampliación (lightbox) y catálogo cronológico de seminarios dictados.
  - 🎙️ **Sala de Profesores (`/sala-de-profesores`):** 29 sesiones en video enfocadas en preguntas y respuestas con asistentes, buscador en tiempo real, filtros (Q&A vs. Cátedras) y reproductor enlazado a la lista oficial de reproducción de YouTube con actualización automática.
  - 📜 **Crónicas (`/cronicas`):** Archivo de cátedras magistrales (Dr. Adolfo Roitman, Dr. Rene Krüger, Dr. Antonio Piñero).
  - 🏛️ **Cátedra Exclusiva (`/catedra-exclusiva`):** Masterclass del Dr. Antonio Piñero con video introductorio y ficha académica.
  - 🗺️ **Panorama Bíblico (`/panorama-biblico`):** Los 8 episodios de la serie arqueológica y documental completa.
  - 📖 **Cánones Bíblicos (`/canones-biblicos`):** Los 4 módulos críticos sobre manuscritos, códices y formación del canon.
- **Profesores (`/profesores`):** Perfiles académicos y biografías de los docentes de la Escuela.
- **Comunidad y Donaciones (`/comunidad` y Footer):** Enlaces directos a YouTube, Instagram, Facebook, mapa de la sede en Medellín y botones de ofrenda (PayPal y PayU).

---

## 🛠️ Comandos de Desarrollo y Compilación

Desde la raíz del proyecto:

```bash
# Instalar dependencias del frontend
npm --prefix frontend install

# Iniciar servidor de desarrollo en local (http://localhost:5173)
npm run dev

# Compilar para producción (TypeScript + Vite)
npm run build

# Previsualizar la compilación de producción localmente
npm run preview
```

---

## 🚀 Despliegue en Vercel (Paso a Paso)

Este repositorio está preconfigurado con `vercel.json` tanto en la raíz como en `frontend/` para soportar enrutamiento SPA (React Router) sin errores 404.

### Opción 1: Conexión Automática con GitHub (Recomendada - CI/CD)
1. Sube este proyecto a tu repositorio en GitHub:
   ```bash
   git add .
   git commit -m "feat: Escuela de Alexandria web & blog portal"
   git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
   git push -u origin main
   ```
2. Entra en tu panel de [Vercel](https://vercel.com) y pulsa **"Add New... -> Project"**.
3. Selecciona tu repositorio de GitHub e impórtalo:
   - **Framework Preset:** Vite
   - **Root Directory:** `./` (o `./frontend`)
   - **Build Command:** `npm run build`
   - **Output Directory:** `frontend/dist` (o `dist` si usas root `frontend`)
4. Pulsa **"Deploy"**. En segundos tendrás tu **dominio temporal activo** (ej: `https://escuela-de-alexandria-xxx.vercel.app`).
5. **CI/CD Automático:** Cada vez que hagas `git push` a `main`, Vercel compilará y actualizará el sitio automáticamente. Además, GitHub Actions (`.github/workflows/ci.yml`) validará el build en cada commit/PR.

### Opción 2: Despliegue Directo desde Terminal con Vercel CLI
```bash
# Iniciar sesión en tu cuenta de Vercel
npx vercel login

# Desplegar en modo producción
npx vercel --prod
```

---

## 🌐 Configuración del Dominio Propio

Cuando desees asociar el dominio definitivo de la **Escuela de Alexandría** (ej: `escueladealexandria.com`):

1. En tu proyecto en Vercel, ve a **Settings &rarr; Domains**.
2. Escribe tu dominio y pulsa **Add**.
3. En el proveedor donde compraste el dominio (GoDaddy, Namecheap, Cloudflare, etc.), agrega los registros DNS que te indica Vercel:
   - **CNAME** `cname.vercel-dns.com` para `www`
   - **A Record** `76.76.21.21` para el dominio raíz `@`
4. Vercel emitirá automáticamente el certificado SSL (HTTPS) gratuito en pocos minutos.
