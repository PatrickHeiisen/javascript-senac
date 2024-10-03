/**
 * Calculo do consumo de combustivel
 */
const input = require("readline-sync")

let distancia, litros, consumo

console.clear()
console.log("Calculo do consumo de combustivel")

distancia = Number(input.question("Diastancia percorrida: "))
litros = Number(input.question("Quantidade de litros de combustivel: "))

consumo = distancia / litros

console.log(`Consumo do veiculo: ${consumo.toFixed(1)} Km/l`)