/**
 * Media aritmetica de 3 valores
 * @author Patrick G
 */

// importar a biblioteca
const input = require('readline-sync')
const colors = require('colors')

// variaveis
let valor1, valor2, media

console.clear()
console.log("Calculo da media escolar!!!!!")
console.log()

// entrada
// no console entrada numericas precisam ser convertidas usando a funcao Number
valor1 = Number(input.question("Digite a primeira nota: ".bgCyan))
valor2 = Number(input.question("Digite a segunda nota: ".bgGreen))


// processamento
media = (valor1 + valor2) / 2
console.log()
console.log(`A media da nota foi: ${media.toFixed(1)}`.bgBlue)
