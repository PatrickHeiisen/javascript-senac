/**
 * Verificar Maioridade
 */
const input = require('readline-sync')

let idade

console.clear()
console.log("Verificar Maioridade")

idade = Number(input.question("Digite sua idade: "))

if (idade > 18){
    console.log("Maior de Idade!!!")
}else{
    console.log("Menor de Idade!!!")
}

console.log(`Idade: ${idade} anos`)

