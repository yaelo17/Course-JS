// Creacion de strings
const primeraOpcion = 'comillas simples'
const segundaOpcion = "comillas dobles"
const terceraOpcion = `comillas invertidas`

// Concatenacion: Opcion +
const direccion = 'Calle Falsa 123'
const ciudad = 'Springfield'
const direccionCompleta = 'Mi direccion es: ' + direccion + ' en la ciudad de ' + ciudad
console.log(direccionCompleta)

// Concatenacion: Template literals
const nombre = 'Homero'
const comida = '🫔'
const presentacion = `Hola, soy ${nombre} y me encanta el ${comida}`
console.log(presentacion)

// Concatenacion: Join()
const primeraParte = 'Hola, soy'
const segundaParte = 'Homero'  
const terceraParte = 'y me encantan los'
const cuartaParte = '🌮'
const pensamiento = [primeraParte, segundaParte, terceraParte, cuartaParte]
console.log(pensamiento.join(' '))

// Concatenacion: Concat()
const hobbie1 = '🎮'
const hobbie2 = '🕺'
const hobbie3 = '🍴'
const boddies = 'mis hobbies son: '.concat(hobbie1, ', ', hobbie2, ', ', hobbie3)
console.log(boddies)