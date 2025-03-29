    const owner = 'Juan'
    const address = 'Calle 123'

function dogGreeting (owner, address) {
    console.log(`Hola, mi nombre es ${this.dogName} y yo vivo con ${owner} en ${address}`)
}

const newhouse = {
    dogName: 'Rex'
}

dogGreeting.call(newhouse, owner, address)

const necessaryValues = [owner, address] 
dogGreeting.apply(newhouse, necessaryValues)

const bindingWithBind = dogGreeting.bind(newhouse, owner, address)
bindingWithBind()
