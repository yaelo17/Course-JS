const numeroSecreto = Math.floor(Math.random() * 10) + 1

const numeroJugador = parseInt(prompt("Adivina el número entre 1 y 10"))

console.log(`Este es el numero con el que juegas: ${numeroJugador}`)

if (numeroJugador === numeroSecreto) {
    console.log("¡Felicidades, Ganaste!")
} else if (numeroJugador > numeroSecreto) {
    console.log("El número es mayor al número secreto, intenta otra vez")
} else if (numeroJugador < numeroSecreto) {
    console.log("El número es menor al número secreto, intenta otra vez")
}
    