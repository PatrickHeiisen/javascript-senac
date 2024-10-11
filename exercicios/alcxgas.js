/**
 * APP Etanol x Gasolina
 */
const input = require('readline-sync')

let etanol, gasolina

console.clear()
console.log("APP ETANOL x GASOLINA")

etanol = Number(input.question("Digite o valor do etanol: "))
gasolina = Number(input.question("Digite o valor da gasolina: "))

if (etanol < 0.7 * gasolina){
    console.log("Abastecer com Etanol")
}else{
    console.log("Abastecer com Gasolina")
}
