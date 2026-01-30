# MyAllSupport | IRIS Solutions — Portfolio de Solucioines IRIS

Sitio estático (Astro 5 + MDX) para presentar PoCs y soluciones sobre **InterSystems IRIS**.

## Requisitos
- Node.js 18.14+ (recomendado 20 LTS)
- npm

## Setup rápido
```bash
npm install
npm run dev
```
`npm run build` genera `dist/` y `npm run preview` sirve ese build localmente.

## Estructura
```
src/
  components/      # UI reutilizable (carrusel, tarjetas)
  content/pocs/    # PoCs en MDX (cargados vía astro:content)
  layouts/         # BaseLayout con meta y estilos globales
  pages/           # Rutas públicas (/pocs, /services, /contact)
  data/            # Listado auxiliar de repos (opcional)
```

## Cómo agregar un PoC
1) Crea un MDX en `src/content/pocs/<slug>.mdx`.
2) Usa el frontmatter que cumple el esquema de `src/content/config.ts`:
```md
---
title: "Abandoned Cart Recovery (VTEX ↔ SAP ↔ Email)"
subtitle: "Automatiza la recuperación de carritos..."
repo: "https://github.com/christianasmussenb/iris103"
repoName: "iris103"
category: "Retail"
industries: ["Retail", "eCommerce"]
capabilities: ["VTEX", "SAP JDBC", "Interoperability", "Email"]
featured: true
updatedAt: "2026-01-28T20:29:54Z"
---
Contenido en Markdown/MDX...
```
3) El slug del archivo define la URL `/pocs/<slug>` y el listado se pobla automáticamente.

## Deploy (Cloudflare Pages)
- Framework: Astro
- Build command: `npm run build`
- Output directory: `dist`
- Dominio objetivo: `iris.myallsupport.cl`
