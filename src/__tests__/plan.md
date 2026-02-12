# Plan de tests unitarios para Trifori Arquitectes

## Componentes a testear
- Footer
- SocialNetworks
- Map
- ContactForm
- InstagramEmbed
- ProjectCarousel
- ProjectCard
- Header

## Hooks a testear
- use-meta

## Páginas principales a testear (smoke tests)
- FAQ
- FAQDetails
- AboutUs
- Contact
- PrivacyPolicy
- Projects
- HomePage

## Framework utilizado
Se ha usado **Vitest** como framework de testing y **React Testing Library** para testear los componentes de React, por su integración con Vite y React 19.

Vitest permite generar cobertura de tests (coverage), por lo que el proyecto cuenta con reporte de cobertura automático.

## Comandos para ejecutar tests y coverage
Para ejecutar los tests:

```bash
npx vitest run
```

Para ejecutar los tests en modo interactivo:

```bash
npx vitest
```

Para generar el reporte de cobertura:

```bash
npx vitest run --coverage
```

El reporte de cobertura se genera en la carpeta `coverage/`.

