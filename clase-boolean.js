const isActive = true;
const hasPermission = false;

// Conversion Implicita
const result = 5 > 3; // true
console.log(result);

const name = 'Platzi';
console.log(!!name); // true

// Conversion Explicita
const value = 0;
const otherValue = -24;
const explicitBoolean = Boolean(value);
console.log(explicitBoolean); // false