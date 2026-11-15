# Sunset Experience 🌅

Sitio web de Sunset Experience — turismo sanador y guía del Litoral de los Poetas (El Tabo, Isla Negra, Las Cruces).

Hecho con Vite + React + TypeScript + Tailwind (shadcn/ui). Publicado con **GitHub Pages**: cada cambio que se sube a la rama `main` se compila y publica solo (pestaña **Actions**).

> El proyecto nació en Lovable y se desconectó el 15-11-2026. Desde entonces se edita solo aquí.

## Dónde está cada cosa

| Qué cambiar | Dónde |
|---|---|
| Textos en ES / EN / PT | `src/contexts/LanguageContext.tsx` |
| Secciones de la página | `src/components/` |
| Fotos | `src/assets/` |
| Colores y tipografía | `src/index.css` y `tailwind.config.ts` |

## Trabajar en tu computador

Requiere Node.js 20+.

```sh
git clone https://github.com/topja/sunset-experience.git
cd sunset-experience
npm install
npm run dev      # abre http://localhost:8080
```

## Dominio propio

El sitio vive en **https://sunsetexperience.cl** (archivo `public/CNAME`). DNS: NIC Chile → Cloudflare (carol/dimitris.ns.cloudflare.com) → GitHub Pages (4 registros A 185.199.108-111.153 + CNAME www → topja.github.io, sin proxy). El workflow detecta el CNAME y compila para la raíz del dominio.
