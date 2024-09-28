/**
 * Media aritmetica de 3 valores
 * @author Patrick G
 */

// importar a biblioteca
const input = require('readline-sync')

// variaveis
let valor1, valor2, valor3, media

console.clear()
console.log("Calculo da media aritmetica de 3 numeros!!!!!")

// entrada
// no console entrada numericas precisam ser convertidas usando a funcao Number
valor1 = Number(input.question("Digite o primeiro valor: "))
valor2 = Number(input.question("Digite o terceiro valor: "))
valor3 = Number(input.question("Digite o terceiro valor: "))

// processamento
media = (valor1 + valor2 + valor3) / 3
console.log()
console.log(`Media: ${media.toFixed(1)}`)

