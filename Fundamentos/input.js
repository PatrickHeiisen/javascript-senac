/**
 * Input de dados via terminal usao da biblioteca read-line-sync
 * @author Patrick
 */

// importar pacote
const input = require('readline-sync')
const colors = require('colors')

let nome

console.clear()

nome = input.question("Digite seu nome: ")
console.log(`Hello ${nome}`.america.bold)
