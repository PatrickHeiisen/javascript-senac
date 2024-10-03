/**
 * Calculo de regra
 */
const input = require("readline-sync")

let valor, x, y

console.clear()
console.log("calculo de regra de 3")

x = Number(input.question("Digite o valor de X: "))
y = Number(input.question("Digite o valor de Y: "))

valor = (x * y) / 100

console.log(`${valor}`)
