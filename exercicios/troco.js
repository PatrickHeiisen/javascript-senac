/**
 * Calculo do troco
 * @author Patric G
 */
const input = require('readline-sync')

let totalCompra, valorPago, troco

console.clear()
console.log("Calculadora de troco!!!!")

totalCompra = Number(input.question('Qual o valor da compra: '))
valorPago = Number(input.question('Digite o valor que ira pagar: '))

troco = valorPago - totalCompra

console.log(`O total da sua compra foi de R$ ${totalCompra.toFixed(2)} reais, total pago foi de R$ ${valorPago.toFixed(2)} reais,
seu troco sera R$ ${troco.toFixed(2)} reais`)