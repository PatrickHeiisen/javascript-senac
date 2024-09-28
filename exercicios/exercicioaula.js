/**
 * 13) Cálculo da quantidade de latas de tinta:
    Desenvolva um programa que calcule a quantidade de latas de tinta necessárias para pintar uma parede, 
    dado o tamanho da parede (em m²) e o rendimento da lata (em m² por lata).
    @author Patrick G
 */

// importar a biblioteca
const input = require('readline-sync')

// variaveis
let latas, rendimento, parede

console.clear()
console.log(" Exercicio Aula !!!!!")
console.log()

// entrada
parede = Number(input.question("Digite o tamanho da parede em metros quadrados: "))
rendimento = Number(input.question("Digite o rendimento da lata em metros quadrados por lata: "))

// processamento
latas = parede / rendimento
console.log()
console.log(`Você precisará de ${latas} latas de tinta para pintar a parede.`)
