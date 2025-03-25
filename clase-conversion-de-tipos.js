// Explicit Type Casting
// Convertir de string a number
const string = '42';
const integer = parseInt(string);
console.log(integer); // 42
console.log(typeof integer); // number

// Convertir de string a number con decimales
const stringDecimal = '3.14';
const float = parseFloat(stringDecimal);
console.log(float); // 3.14
console.log(typeof float); // number

// Convertir de number a string
const binary = '1010';
const decimal = parseInt(binary, 2);
console.log(decimal); // 10
console.log(typeof decimal); // number

// Implicit Type Casting
// Convertir de number a string
const sum = '5' + 3;
console.log(sum); // 53

// Convertir de booleanos a string
const boolean = true + '3';
console.log(boolean); // true3

// Convertir de booleanos a number
const booleanNumber = true + 2;

const stringValue = '42';
const numberValue = 42;
const booleanValue = true;
console.log(stringValue + stringValue); 
console.log(stringValue + numberValue);
console.log(stringValue + booleanValue);
console.log(numberValue + stringValue); 
console.log(numberValue + numberValue);
console.log(numberValue + booleanValue);
console.log(booleanNumber + stringValue); 
console.log(booleanNumber + numberValue);
console.log(booleanNumber + booleanValue);