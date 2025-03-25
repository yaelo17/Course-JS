// Capacidades que tienen las funciones y los métodos en JavaScript

// 1.- Pasar funciones como argumentos --> Callback

function a (){}
function b (){}

b(a)

// 2.- Retornar funciones --> Closure
function a (){
    function b () {}
    return b
}

// 3.- Asignar funciones a variables --> Expresiones de función

const b = function (){}

// 4.- Tener propiedades y metodos

function a (){}
const obj = {}
a.call(obj) // a es un método

// 5.- Anidar funciones --> Nested functions

function a (){
    function b () {
        function c () {

        }
        c()
    }
    b()
}
a()


// Es posible almacenar funciones en objetos

const rocket = {
    name: 'Falcon 1',
    launchMessage: function launchMessage () {
        console.log(`🔥`)
    }
}

rocket.launchMessage()
