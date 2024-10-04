/**
 * PDV
 * @author Patrick
 */
const input = require('readline-sync')

let total, valorPago, desconto, troco, valorDesconto, totalDesconto

console.clear()

console.log("____  ______ __     __      ")
console.log("|  _ \\|  _ \\  \\    / /   ")
console.log("| |_) | | | \\  \\  / /    ")
console.log("|  __/| |_| |\\  V  /     ")
console.log("|_|   |____/  \\__ /      ")
                    
// entrada 1 
total = Number(input.question('Digite o valor total da compra: '))
desconto = Number(input.question('Digite o valor do desconto em %: '))    

// processamento 1
valorDesconto = (desconto * total) / 100

// processamento 2
totalDesconto = total - valorDesconto

// saida 1
console.log("")
console.log("-----------------------------------------------")
console.log(`Total: R$ ${total.toFixed(2)}`)
console.log(`Desconto: ${desconto}%`)
console.log(`Valor do Desconto: R$ ${valorDesconto.toFixed(2)}`)
console.log(`Total com Desconto: R$ ${totalDesconto.toFixed(2)}`)
console.log("")

// entrada 2
valorPago = Number(input.question("Valor em dinheiro pago pelo cliente: "))

// processamento 3
troco = valorPago - totalDesconto

// saida 2
console.log("")
console.log(`Valor pago em dinheiro: R$ ${valorPago.toFixed(2)}`)
console.log(`Troco: R$ ${troco.toFixed(2)}`)
console.log("-----------------------------------------------")

                               
                               
                               
