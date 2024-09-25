/**
 * Ficha de um aluno de academia
 * @author Patrick G Correia
 */

//Variaveis
let nome
let idade
let altura
let peso
let vip
let fcm
let imc

console.clear()

// Entrada de Dados
nome = "Patrick G"
idade = 25
peso = 56
altura = 1.75
vip = true
fcm = 208 - (0.7 * idade)
imc = peso / (altura * altura)

// Saida de Dados
console.log("*************************************")
console.log("FICHA DO ALUNO")
console.log()
console.log(`Nome: ${nome}`)
console.log(`idade: ${idade}`)
console.log(`Peso: ${peso}`)
console.log(`Altura: ${altura}`)
console.log(`Vip: ${vip}`)
console.log(`Fcm ${fcm}`)
console.log(`Imc: ${imc.toFixed(2)}`)
console.log()
console.log("*************************************")
