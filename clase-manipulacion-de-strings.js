// String Primitivos
const stringPrimitivo = 'Soy un Spring Primitivo';
console.log(typeof stringPrimitivo);

const stringPrimitivoTambien = string('Soy un Spring Primitivo tambien');
console.log(typeof stringPrimitivoTambien);

// String Objeto
const stringObjeto = new String('Soy un String Objeto');
console.log(typeof stringObjeto);


// Acceder a caracteres
const saludo = 'Hola, Como estas?';
console.log(saludo[2]); // l
console.log(saludo.charAt(2)); // l
console.log(saludo.indexOf(0)); // H
console.log(saludo.indexOf('Como')); // Como
console.log(saludo.indexOf('como')); // -1
console.log(saludo.lastIndexOf('o')); // 10
console.log(saludo.slice(3, 5)); // a.
console.log(saludo.length(3, 5)); // 18
console.log(saludo.toLocaleUpperCase(',')); // [ 'Hola', ' Como estas?' ]
console.log(saludo.toLocaleLowerCase(',')); // [ 'hola', ' como estas?' ]

const saludoDividido = saludo.split(' ');
console.log(saludoDividido); // [ 'Hola,', 'Como', 'estas?' ]
console.log(saludoDividido.join[1])

const saludoConEspacios = ' Hola, Como estas? ';
const saludoSinEspacios = saludoConEspacios.trim();
console.log(saludoSinEspacios); // Hola, Como estas?

const saludoOriginal = 'Hola, Como estas?';
const nuevoSaludo = saludoOriginal.replace('Como', '🫔');
console.log(nuevoSaludo); // Hola, 🫔 estas?