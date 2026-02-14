# Sección Español

## Trifori Arquitectes — Portfolio

<img src="./public/assets/logo-black.png" />


Este repositorio contiene el portfolio del estudio de arquitectura "Trifori Arquitectes", construida con React, TypeScript y Vite. Está preparada para varias lenguas (cat, en, es) y cuenta con componentes reutilizables para presentar proyectos, formulario de contacto, mapa y redes sociales.

## Características principales

- Multilenguaje con `react-i18next` (carpetas en `src/locales` para `cat`, `en`, `es`).
- Formularios con `react-hook-form` y validación con `zod` (`src/components/ContactForm.tsx`, `contactFormSchema.ts`).
- Integración de mapa con `mapbox-gl` (`src/components/Map.tsx`).
- Componentes para proyectos, carrusel e incrustaciones sociales (`ProjectCard`, `ProjectCarousel`, `InstagramEmbed`).
- Estructura de estilos en `src/styles` (CSS modular y organizado por página/componentes).

## Tecnologías

- React 19 + TypeScript
- Vite (bundler y dev server)
- react-i18next / i18next
- react-hook-form, zod
- mapbox-gl
- ESLint para linting

## Requisitos

- Node.js 16+ y npm (o yarn/pnpm si lo prefieres).

## Instalación y desarrollo

1. Instala dependencias:

```bash
npm install
```

2. Levanta el servidor de desarrollo:

```bash
npm run dev
npm run dev -- --host (para mobile)
```

3. Construir para producción:

```bash
npm run build
```

4. Probar una versión de producción localmente:

```bash
npm run preview
```

5. Ejecutar linter:

```bash
npm run lint
```

## Estructura del proyecto (resumen relevante)

- `index.html` — punto de entrada HTML.
- `src/main.tsx` — arranque de la app.
- `src/i18n.ts` — configuración de i18n.
- `src/components/` — componentes reutilizables (ContactForm, Header, Footer, Map, ProjectCard, ProjectCarousel, SocialNetworks, ...).
- `src/pages/` — páginas (HomePage, Projects, Contact, AboutUs, FAQ, PrivacyPolicy).
- `src/locales/` — archivos de traducción por idioma.
- `src/styles/` — hojas CSS por pagina/componente.
- `public/` — activos estáticos (imágenes, fuentes, robots.txt, etc.).

## Notas de desarrollo

- La validación del formulario de contacto usa `zod` a través de `@hookform/resolvers`.
- Para trabajar con Mapbox asegúrate de configurar la clave de Mapbox en las variables de entorno si la aplicación la requiere.
- Si añades nuevas rutas, regístralas en `react-router-dom` siguiendo el patrón de `src/main.tsx` / `src/pages`.

## Contribuciones

Las contribuciones sólo están permitidas con el permiso expreso de Trifori Arquitectes.

Si deseas proponer cambios o colaborar, primero solicita autorización abriendo un issue en el repositorio o contactando con el responsable del proyecto. Solo tras recibir la autorización por escrito se permitirá:

1. Hacer un fork.
2. Crear una rama `feature/` o `bugfix/`.
3. Abrir un pull request describiendo el cambio.

Por favor, sigue las reglas de linting antes de crear PRs (`npm run lint`).

## Licencia

Todos los derechos reservados.

El código fuente y los contenidos de este repositorio son propiedad de Trifori Arquitectes. No se permite copiar, modificar, distribuir ni crear obras derivadas sin el permiso escrito y expreso del titular de los derechos.

Si necesitas usar, redistribuir o contribuir, por favor solicita autorización abriendo un issue o contactando con el responsable del proyecto.

## Contacto

Para dudas o cambios relacionados con el contenido, contactar con y.camarasa@gmail.com

---

# English Section
## Trifori Arquitectes — Portfolio

This repository contains the portfolio of the architecture studio "Trifori Arquitectes", built with React, TypeScript, and Vite. It is prepared for multiple languages (cat, en, es) and features reusable components to present projects, contact form, map, and social networks.

## Main Features

- Multilingual support with `react-i18next` (folders in `src/locales` for `cat`, `en`, `es`).
- Forms with `react-hook-form` and validation with `zod` (`src/components/ContactForm.tsx`, `contactFormSchema.ts`).
- Map integration with `mapbox-gl` (`src/components/Map.tsx`).
- Components for projects, carousel, and social embeds (`ProjectCard`, `ProjectCarousel`, `InstagramEmbed`).
- Organized styles structure in `src/styles` (modular CSS organized by page/components).

## Technologies

- React 19 + TypeScript
- Vite (bundler and dev server)
- react-i18next / i18next
- react-hook-form, zod
- mapbox-gl
- ESLint for linting

## Requirements

- Node.js 16+ and npm (or yarn/pnpm if you prefer).

## Installation and Development

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
npm run dev -- --host (for mobile)
```

3. Build for production:

```bash
npm run build
```

4. Test a production version locally:

```bash
npm run preview
```

5. Run linter:

```bash
npm run lint
```

## Project Structure (relevant summary)

- `index.html` — HTML entry point.
- `src/main.tsx` — app bootstrap.
- `src/i18n.ts` — i18n configuration.
- `src/components/` — reusable components (ContactForm, Header, Footer, Map, ProjectCard, ProjectCarousel, SocialNetworks, ...).
- `src/pages/` — pages (HomePage, Projects, Contact, AboutUs, FAQ, PrivacyPolicy).
- `src/locales/` — translation files by language.
- `src/styles/` — CSS files by page/component.
- `public/` — static assets (images, fonts, robots.txt, etc.).

## Development Notes

- The contact form validation uses `zod` through `@hookform/resolvers`.
- To work with Mapbox, ensure to set up the Mapbox key in the environment variables if the application requires it.
- If you add new routes, register them in `react-router-dom` following the pattern in `src/main.tsx` / `src/pages`.

## Contributions

Contributions are only allowed with the express permission of Trifori Arquitectes.

If you wish to propose changes or collaborate, please request authorization by opening an issue in the repository or contacting the project manager. Only after receiving written authorization will the following be allowed:

1. Forking the repository.
2. Creating a `feature/` or `bugfix/` branch.
3. Opening a pull request describing the change.

Please follow the linting rules before creating PRs (`npm run lint`).

## License

All rights reserved.

The source code and contents of this repository are the property of Trifori Arquitectes. Copying, modifying, distributing, or creating derivative works without the written and express permission of the rights holder is not allowed.

If you need to use, redistribute, or contribute, please request authorization by opening an issue or contacting the project manager.

## Contact

For questions or changes related to the content, contact y.camarasa@gmail.com


