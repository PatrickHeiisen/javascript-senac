/**
 * Tabuada
 * @author Patrick G
 */
const input = require('readline-sync')

let valor, soma

console.clear()
console.log('------ Tabuada ---------')
valor = Number(input.question("Digite um numero para ver sua tabuada: "))

for(let i = 1; i < 11; i++){
    soma = valor * i
    console.log(`${valor} x ${i} = ${soma}`) // outra opção console.log(`${i} x ${valor} = ${valor * i}`)
}