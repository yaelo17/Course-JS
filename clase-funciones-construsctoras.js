const personalizedMessage = () => 'Goodbye everybody'

function Rocket (name, ownMessage) {
    this.name = name
    this.launchMessage = ownMessage || personalizedMessage    
}

const falcon9Rocket = new Rocket('Falcon 9', personalizedMessage)
const falconHeavyRocket = new Rocket('Falcon Heavy', personalizedMessage)
console.log(falcon9Rocket.name) // Falcon 9
console.log(falconHeavyRocket.launchMessage()) // Falcon Heavy

const rocketWithArrowFunction = (name, ownMessage) => ({
    name: name,
    launchMessage: ownMessage 
}) 

const personalizedMessageForArrowFunction = () => 'Successful Launch!'
const falcon9Rocket1 = rocketWithArrowFunction('Falcon 9', personalizedMessageForArrowFunction)

console.group(falcon9Rocket1.name) // Falcon 9
console.group(falcon9Rocket1.launchMessage) // Falcon 9