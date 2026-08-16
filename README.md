# Ger Jiménez — Portfolio

Sitio personal de Product Designer. Hecho con React, Vite y Tailwind.

## Desarrollo local

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
npm run preview
```

## Deploy en Vercel

El proyecto es una SPA de Vite. `vercel.json` reescribe las rutas del cliente (`/` y `/proyectos`) a `index.html`.

1. Subí el repo a GitHub.
2. En [Vercel](https://vercel.com/new), importá el repositorio.
3. Framework: Vite (se detecta solo). Build: `npm run build`. Output: `dist`.
4. Cada push a `main` publica producción. Cada PR genera un preview.

## Notas

- El formulario de contacto envía mails a `indiarte@gmail.com` vía FormSubmit. La primera vez hay que confirmar el mail de activación que llega a esa casilla.
- Atribuciones de assets en `ATTRIBUTIONS.md`.
