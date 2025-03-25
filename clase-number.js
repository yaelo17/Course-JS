// 1.- Tipo entero y decimal
const entero = 42;
const decimal = 3.14;
console.log(typeof entero, typeof decimal);

// 2.- Notacion cientifica
const cientifico = 5e3;

// 3.- Infinitos y NaN
const infinito = Infinity;
const noEsUnNumero = NaN;

// Operaciones aritmeticas
// 1.- Suma, resta, multiplicacion y division
const suma = 1 + 1;
const resta = 1 - 1;  
const multiplicacion = 2 * 2;
const division = 4 / 2;

// 2.- Modulo y exponenciacion
const modulo = 5 % 2;
const exponenciacion = 2 ** 3;


// 3.- Precicion 
const resultado = 0.1 + 0.2;
console.log(resultado.toFixed(2)); // 0.30
console.log(resultado === 0.3); // false

// 4.- Operadores avanzadas
const raizCuadrada = Math.sqrt(9);
const valorAbsoluto = Math.abs(-10);
const aleatorio = Math.random();
console.log(aleatorio);
console.log(raizCuadrada, valorAbsoluto);