Scenarios en el requisito: 3 · Cubiertos: 0


| Scenario                                                   | Test que lo cubre        | Estado      | Qué te faltó                                                                                                                                  |
| ---------------------------------------------------------- | ------------------------ | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| El assignee trae el nombre y las iniciales del responsable |                          | No cubierto |                                                                                                                                               |
| El assignee no incluye el email ni datos de acceso         |                          | No cubierto |                                                                                                                                               |
| Sin nombre, el assignee llega con nombre nulo e iniciales  | `tests de autenticación` | No lo sé    | Encontré menciones a nombres/iniciales en la carpeta `auth/`, pero me faltó confirmar si validaban el assignee de las tareas o solo el login. |


1. Antes de mirar creía que habría 3 escenarios cubiertos asumiendo que habría algo hecho, pero había 0 porque la carpeta de tareas no existía.
2. En el escenario de "no incluye el email", dudé si la regla de la spec se refería a no dibujarlo en la interfaz (frontend) o a cortar el dato de raíz en la respuesta de la API (backend).
3. Para el escenario "sin nombre", el test asume e inyecta que el valor enviado por el backend es `null`, una decisión técnica mía porque la spec no define si llega `null`, un string vacío `""`, o si la propiedad simplemente desaparece.

