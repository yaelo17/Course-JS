// Tipo de dato complejo - Paso por referencia

let frutas = {
    naranja: '🍊',
}
let vegetales = frutas

vegetales.naranja = '🥦'
console.log(frutas)

let ropa = {
    camisa: '👕',
} 

ropa.pantalon = '👖'
console.log(ropa)