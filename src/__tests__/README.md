# Cómo ejecutar los tests unitarios

1. Ejecuta los tests con:

   ```bash
   npx vitest run
   ```
   o en modo interactivo:
   ```bash
   npx vitest
   ```

2. Para ver el reporte de cobertura:

   ```bash
   npx vitest run --coverage
   ```

Los tests están ubicados en las carpetas `src/components/__tests__`, `src/pages/__tests__` y `src/hooks/__tests__`.

Si tienes dudas, revisa la configuración en `vitest.config.ts` y el setup en `src/__tests__/setupTests.ts`.