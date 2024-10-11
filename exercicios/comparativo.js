/**
 * Comparativo
 * @author Patrick G
 */
const input = require('readline-sync')

let alcool, gasolina, comparar

console.clear()
console.log("Comparativo")

alcool = input.question("Digite o valor do Alcool: ")
gasolina = input.question("Digite o valor da Gasolina: ")

comparar = alcool / gasolina

if (comparar < 0.7) {
    console.log("Melhor comprar Alcool")
}else{
    console.log("Melhor comprar Gasolina")
}
