const greeting = function(name) {
  return `Hello ${name}`;
}


// Arrow function with explicit return
const newGreeting = (name) => {
    return `Hello ${name}`;
  }

// Arrow function with implicit return
const newGreetingImplicit = name => `Hi, ${name}`
const newGreetingImplicitWithTwoParameters = (name, lastName) => `Hi, I'm ${name} ${lastName}`

// Lexicanl Binding
const finctionalCharacter = {
    name: 'Uncle Ben',
    messageWithTraditionalFunction: function (message) {
        console.log(`${this.name} says: ${message}`);
    },
    messageWithArrowFunction: (message) => {
        console.log(`${this.name} says: ${message}`);
    }
}

finctionalCharacter.messageWithTraditionalFunction('With great power comes great responsibility')
finctionalCharacter.messageWithArrowFunction('Beware of Doctor Octopus')