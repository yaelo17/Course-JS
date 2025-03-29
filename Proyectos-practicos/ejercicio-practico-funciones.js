// Create a Profesional Player objects

function profesionalPlayer(name, age, position, team) {
  this.name = name
  this.age = age
  this.position = position
  this.team = team
  this.isinjured = false

  this.displayInfo = function () {
    console.log(`Player Information:
        Name: ${this.name}
        Age: ${this.age}
        Position: ${this.position}
        Team: ${this.team}
        ${this.isinjured ? 'Injured : Yes' : 'Injured: No'}
        `)
    }

    this.becomeinjured = function () {
        this.isinjured = true
        console.log(`${this.name} is injured.`)
    }
}
// Create a new profesional player object
const Messi = new profesionalPlayer ('Lionel Messi', 35, 'Right Winger', 'Inter Miami'
)
const Ronaldo = new profesionalPlayer ('Cristiano Ronaldo', 39, 'Striker', 'Al Nassr'
)
const Neymar = new profesionalPlayer ('Neymar Jr', 32, 'Left Winger', 'Santos'
)


Messi.displayInfo()
Ronaldo.displayInfo()
Neymar.displayInfo()

Neymar.becomeinjured()

Messi.displayInfo()
Ronaldo.displayInfo()
Neymar.displayInfo()
