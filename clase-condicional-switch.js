let frutas = "Uvas"

switch (frutas) { // ===
    case "Manzanas":
        console.log("Las manzanas cuestan $20 el kilo")
        break;
    case "Peras":
        console.log("Las peras cuestan $25 el kilo")
        break;
    case "Papayas":
        console.log("Las papayas cuestan $30 el kilo")
        break;
    case "Naranjas":
        console.log("Las naranjas cuestan $15 el kilo")
        break;
    default:
        console.log(`No tenemos información sobre el precio de las ${frutas}`)
}  

console.log("Hay algo mas que desees comprar?")
