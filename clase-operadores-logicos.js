/* Operadores lógicos
    && (AND)  - Devuelve verdadero si ambos operandos son verdaderos.
    || (OR)   - Devuelve verdadero si al menos uno de los operandos es verdadero.
    !  (NOT) - Devuelve verdadero si el operando es falso.
*/

const a = 10
const b = 20
const c = "10"

a == b && a === c // false
a != b || a === c // true
!(a === c) // true
