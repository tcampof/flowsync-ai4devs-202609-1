# prompt 1

Lee el requisito «Lo que cada tarea muestra de su responsable» en el archivo openspec/specs/tasks/spec.md. Concéntrate en el primer escenario de ese requisito y busca en la carpeta backend/tests/functional/tasks/ si existe algún test que intente cubrirlo.

Si encuentras algún test relacionado:

Dime el nombre exacto de la función del test.

Explícame en una línea qué están comprobando realmente sus aserciones (asserts) en el código.

No modifiques ni escribas ningún test todavía, solo audita lo que existe actualmente.

# prompt2 

Dado que no existe la carpeta backend/tests/functional/tasks/, vamos a crear los tests desde cero.

Crea el archivo necesario dentro de esa carpeta y escribe únicamente el test para el primer escenario del requisito «Lo que cada tarea muestra de su responsable».

Regla estricta: Debes fijarte en los archivos de la carpeta backend/tests/functional/auth/ e imitar exactamente su estilo de código, librerías, fixtures y convenciones de aserciones.

Cuando termines de escribirlo, indícame qué comando debo ejecutar en la terminal para correr este test y confirmar que falla (rojo).

# prompt 3

Excelente. Ahora vamos a cubrir los demás escenarios del requisito «Lo que cada tarea muestra de su responsable».

Lee los escenarios que faltan en openspec/specs/tasks/spec.md. Por cada escenario restante, añade un nuevo bloque de test dentro del mismo archivo backend/tests/functional/tasks/assignee.spec.ts.

Mantén exactamente el mismo estilo del test anterior.

Hazlo paso a paso, asegurándote de que cada aserción comprueba exactamente lo que pide su escenario.

Crucial: Si el escenario menciona un caso extremo o un dato vacío (por ejemplo, ¿qué pasa si no tiene asignado a nadie o el nombre está en blanco?), y no te queda claro cómo representarlo, toma tú la decisión sobre qué valores usar para el test, pero no modifiques el código de la aplicación para que pase.

Cuando termines, dame el comando para ejecutar todos los tests de este archivo juntos.