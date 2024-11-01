/**
 * Desenvolvimento de uma calculadora
 * @author Patrick G
 */

const input = require(`readline-sync`)

let a, b, calculadora
 console.clear()
 console.log("Calculadora")

 a = Number(input.question("Digite o primeiro numero: "))
 b = Number(input.question("Digite o segundo numero: "))

 console.log("")
 console.log("1. Somar")
 console.log("2. Subtrair")
 console.log("3. Multiplicar")
 console.log("4. Dividir")
 console.log("5. Calcular %")
 calculadora = Number(input.question("Digite a opcao desejada: "))

switch(calculadora){
    case 1:
        console.log("Voce escolheu Somar")
        break
    case 2:
        console.log("Voce escolheu Subtrair")
        break
    case 3:
        console.log("Voce escolheu multiplicar")
        break
    case 4:
        console.log("Voce escolheu Dividir")
        break
    case 5:
        console.log("Voce escolheu calcular Porcentagem")
 }

console.log("")

if (calculadora === 1){
    soma = a + b
    console.log(`A Soma entre ${a} e ${b} e de ${soma}`)
 }else if(calculadora === 2){
    soma = a - b
    console.log(`A Subtracao entre ${a} e ${b} e de ${soma}`)
 }else if(calculadora === 3){
    soma = a * b
    console.log(`A Multiplicacao entre ${a} e ${b} e de ${soma}`)
 }else if(calculadora === 4){
    soma = a / b
    console.log(`A Divicao entre ${a} e ${b} e de ${soma}`)
 }else if(calculadora === 5){
    soma = (a * b) / 100
    console.log(`A Porcentagem entre ${a} e ${b} e de ${soma}`)
 }else{
    console.log("Opcao Invalida")
 }

