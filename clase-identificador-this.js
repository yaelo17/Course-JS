// Enlace implicito - Implicit Binding

const house = {
    dogName: 'Firulais',
    dogGreeting: function() {
        console.log(`Hola, mi nombre es ${this.dogName}`)
    }
}

house.dogGreeting(); // Hola, mi nombre es Firulais.

// Enlace explicito - Explicit Binding
function dogGreeting() {
    console.log(`Hola, mi nombre es ${this.dogName}`)
}

const newHouse = {
    dogName: 'Coconout',
}

dogGreeting.call(newHouse); // Hola, mi nombre es Coconout. 

function newDogGreeting (owner, address) {
    console.log(`Hola, mi nombre es ${this.dogName} y yo vivo con ${owner} en ${address}`)
}

const owner = 'Juan';
const address = 'Calle 123';
newDogGreeting.call(newHouse, owner, address); // Hola, mi nombre es Coconout y yo vivo con Juan en Calle 123

