/**
 * Calculo do volume de um aquario
 * @author Patrick
 */
const input = require ('readline-sync')

let volume, altura, comprimento, largura

console.clear()
console.log("Calculo do Volume de um Aquario!!!")


comprimento = Number(input.question("Digite o comprimento: "))
largura = Number(input.question("Digite a largura: "))
altura = Number(input.question("Digite a altura: "))

volume = (comprimento * largura * altura) / 1000

console.log(`O volume total e de ${volume} litros`)


