# Prompt 1

Lee el código de autenticación y cuentas en el frontend y en la API. Escribe la especificación de lo que el sistema sabe hacer hoy. 

**Reglas estrictas de formato:**

1. Empieza con `## Purpose` (1-2 frases explicando para qué existe esta capability).
2. Luego usa `## Requirements`.
3. Cada requisito debe empezar por `### Requirement:` y debe usar la palabra RFC **SHALL** (en mayúsculas) para definir la obligación. El resto en castellano.
4. Bajo cada requisito, incluye al menos un `#### Scenario:` (exactamente 4 almohadillas).
5. Dentro del escenario, usa solo las viñetas `- **WHEN**` (que debe incluir la precondición, no uses GIVEN) y `- **THEN**`.
6. PROHIBIDO usar las palabras ADDED, MODIFIED o REMOVED.
7. PROHIBIDO mencionar nombres de archivos, clases, tablas de base de datos o rutas de código. Solo comportamiento observable (lo que el usuario ve o lo que la API recibe/responde).

Escribe el resultado directamente en el archivo `@openspec/specs/cuentas-acceso.spec.md`.