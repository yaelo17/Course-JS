// Metodo Window
window.name = "Goku" 

function favoriteCharacter(){
    console.log(this.name) // undefined
}

favoriteCharacter() // Goku


// Modo estricto
"use strict"
window.name = "Vegeta"

function favoriteCharacterStrict(){
    console.log(this.name) // undefined
}

favoriteCharacterStrict() // undefined