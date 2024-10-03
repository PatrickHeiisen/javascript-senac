/**
 * Calculo do valor do desconto
 * @author Patric G
 */
            
const input = require('readline-sync')

let total, totalDesconto, desconto

console.clear()
console.log('Calculo total do valor de desconto')

total = Number(input.question('Digite o valor da compra: '))
desconto = Number(input.question('Digite o valor do desconto: '))

totalDesconto = total - ((desconto * total) / 100)

console.log(`total com desconto R$ ${totalDesconto}`)

