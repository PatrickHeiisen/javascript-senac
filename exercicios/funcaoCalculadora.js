/**
 * Desenvolvimento de uma calculadora
 * @author Patrick G
 */

const input = require(`readline-sync`)

let a, b, calculadora

do{
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

    switch (calculadora) {
        case 1:
            somar(a, b)
            break
        case 2:
            subtrair(a, b)
            break
        case 3:
            multiplicar(a, b)
            break
        case 4:
            dividir(a, b)
            break
        case 5:
            porcentagem(a, b)
    }

    function somar(a, b) {
        return console.log(`A soma de ${a} + ${b} = ${a + b}`)
    }
    function subtrair(a, b) {
        return console.log(`A subtracao de ${a} - ${b} = ${a - b}`)
    }
    function multiplicar(a, b) {
        return console.log(`A multiplicacao de ${a} * ${b} = ${a * b}`)
    }
    function dividir(a, b) {
        return console.log(`A divisao de ${a} / ${b} = ${a / b}`)
    }
    function porcentagem(a, b) {
        return console.log(`${a} % de ${b} = ${(a * b) / 100}`)
    }

opcao = input.question("Deseja Calcular Novamente s/n: ")
}while (opcao === "s")
