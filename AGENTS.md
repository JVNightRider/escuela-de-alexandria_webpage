# AGENTS.md — Escuela de Alexandría

Reglas de trabajo para este repositorio. Cualquier agente o colaborador debe respetarlas.

## 1. Estilos: fuera de las etiquetas, siempre

**Los estilos no se escriben dentro de las etiquetas HTML.** No se permite `style={{ ... }}` en JSX ni clases utilitarias de Tailwind en `className`. Todo estilo nace en una hoja de estilo y el marcado solo referencia **nombres semánticos**.

```tsx
// ❌ Prohibido
<div className="flex items-center gap-3 rounded-2xl bg-surface p-6 shadow-xl" style={{ marginTop: 24 }}>

// ✅ Correcto
<div className="course-card">
```

### Organización de las hojas de estilo

Los archivos viven en `frontend/src/styles/` y se agrupan por **tipo** (piezas reutilizables) y por **sección** (páginas):

| Archivo | Contenido |
| --- | --- |
| `styles/index.css` | Único punto de entrada: importa el resto en orden. |
| `styles/tokens.css` | Tokens de diseño (`@theme`): colores, tipografías y texturas. |
| `styles/base.css` | Reset, `body`, titulares, superficies de fondo, scrollbar y animaciones. |
| `styles/layout.css` | Estructura global: cabecera, navegación, pie de página y contenedores. |
| `styles/components.css` | Piezas reutilizables: botones, tarjetas, badges, paneles, buscador, reproductor, lightbox. |
| `styles/pages/home.css` | Sección `/`. |
| `styles/pages/catalog.css` | `/cursos`, `/cursos/:slug` y `/profesores`. |
| `styles/pages/education.css` | `/seminarios`, `/catedra-exclusiva`, `/cronicas`, `/panorama-biblico`, `/canones-biblicos`, `/sala-de-profesores`. |
| `styles/pages/community.css` | `/comunidad`. |

### Convenciones de nombres

- Bloques y elementos estilo BEM: `.course-card`, `.course-card__title`, `.player__frame`.
- Variantes con doble guion: `.button--gold`, `.page-hero--compact`.
- Estados con `is-`: `.nav-link.is-active`, `.lesson-item.is-selected`.
- Nunca se usan clases utilitarias de Tailwind en el marcado; si una pieza se repite en dos páginas, su clase vive en `components.css`, no duplicada.

### Única excepción permitida

Valores que solo existen en tiempo de ejecución (por ejemplo, el desplazamiento del parallax o el `background-image` de una imagen que llega por props) se aplican mediante `ref` o una variable CSS, nunca con estilos declarativos escritos en el JSX.

## 2. Contenido: una sola fuente

- Los textos, títulos, descripciones e IDs de video viven en `frontend/src/data/` y se tipan en `frontend/src/types/index.ts`.
- Las páginas son presentación: no declaran contenido propio ni duplican textos entre secciones.
- Un programa académico se declara **una vez** en `coursesData.ts`; sus secciones temáticas lo consumen.
- `Lesson.title` se escribe sin numeración ni nombre del expositor: las etiquetas («Lección N», «Parte N», «Módulo N») y el campo `speaker` los aporta la página.
- Las grabaciones de pago se declaran con `payuLink` y **sin** `youtubeId`.

## 3. Imágenes

- Todas las imágenes viven en `frontend/public/images/` y se referencian por ruta local (`/images/...`).
- Prohibido enlazar imágenes de CDN externos o del sitio antiguo.
- Nombres descriptivos en kebab-case con prefijo por tipo: `curso-`, `profesor-`, `seminario-`, `hero-`.
- Antes de añadir una imagen, redimensionarla al tamaño real de uso (retratos ≤ 900 px de lado mayor, banners ≤ 1600 px) y verificar que no supere ~300 KB.

## 4. SEO y dominio

- **No se escribe ningún dominio en el código.** El origen se toma de la URL en tiempo de ejecución con `getSiteOrigin()` (`frontend/src/data/site.ts`), de modo que cambiar de servidor o de dominio no exige tocar archivos.
- Cada página declara `<PageMeta title description path />`; no se escriben etiquetas meta a mano en los componentes.
- Las etiquetas base viven en `frontend/index.html` con el marcador `__SITE_ORIGIN__`; el plugin de `frontend/vite.config.ts` lo sustituye por el origen del despliegue.
- `robots.txt` y `sitemap.xml` se generan en el build con ese mismo origen (`SITE_URL`, `VERCEL_PROJECT_PRODUCTION_URL`, `URL` o `CF_PAGES_URL`). Si no hay ninguna variable, se publican rutas relativas y no se genera sitemap: nunca se publica un dominio equivocado.
- Los datos estructurados (`SiteSchema`) se generan en React con el origen real de la URL.

## 5. Verificación antes de cerrar un cambio

```bash
npm --prefix frontend exec -- tsc -b      # tipos
npm --prefix frontend run lint            # oxlint
npm --prefix frontend exec -- vite build  # build (en Windows con sandbox: añadir --configLoader native)
```

- No se acepta un cambio que rompa `tsc -b` ni que aumente los errores de lint.
- Si el cambio afecta al render, comprobar las rutas en `http://127.0.0.1:5173`.
- Los commits se hacen **en local**; no se ejecuta `git push` hasta que el responsable lo pida expresamente (Vercel despliega en cada push a `main`).
