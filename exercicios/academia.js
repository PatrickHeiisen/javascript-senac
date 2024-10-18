/**
 * Ficha de um aluno de academia
 * @author Patrick G Correia
 */
// Bibliotecas
const input = require(`readline-sync`)
const colors = require(`colors`)

//Variaveis
let nome, idade, altura, peso, fcm, imc, consumo

// Limpa Tela
console.clear()

// Banner
console.log("██   ██ ███████  █████  ████████ ██   ██      ██████  █████  ██       ██████ ██    ██ ██       █████  ████████  ██████  ██████  ")
console.log("██   ██ ██      ██   ██    ██    ██   ██     ██      ██   ██ ██      ██      ██    ██ ██      ██   ██    ██    ██    ██ ██   ██ ")
console.log("███████ █████   ███████    ██    ███████     ██      ███████ ██      ██      ██    ██ ██      ███████    ██    ██    ██ ██████  ")
console.log("██   ██ ██      ██   ██    ██    ██   ██     ██      ██   ██ ██      ██      ██    ██ ██      ██   ██    ██    ██    ██ ██   ██ ")
console.log("██   ██ ███████ ██   ██    ██    ██   ██      ██████ ██   ██ ███████  ██████  ██████  ███████ ██   ██    ██     ██████  ██   ██ ")
console .log("")

// Entrada de Dados
nome = input.question("Digite seu nome: ")
idade = Number(input.question("Digite sua Idade: "))
altura = Number(input.question("Digite sua Altura: "))
peso = Number(input.question("Digite seu Peso em Kg: "))

// Processamento
fcm = 208 - (0.7 * idade)
imc = peso / (altura * altura)
consumo = peso * 0.035

// Saida de Dados
console.log("")
console.log("*************** FICHA DO ALUNO ********************")
console.log()
console.log(`Nome: ${nome}`)
console.log(`idade: ${idade}`)
console.log(`Peso: ${peso}`)
console.log(`Altura: ${altura}`)
console.log(`Fcm: ${fcm}`)
console.log(`Imc: ${imc.toFixed(2)}`)

// tabela imc
if(imc < 18.5){
    console.log("Abaixo do peso".cyan)
}else if(imc < 25){
    console.log("Peso normal".green)
}else if(imc < 30){
    console.log("Levemente acima do peso".yellow)
}else if(imc < 35){
    console.log("Obesidade grau I".magenta)
}else if(imc < 40){
    console.log("Obsesidade grau II (severa)".red)
}else{
    console.log("Obsidade grau III (morbida)".bgRed)
}

// Consumo de Agua
console.log(`Consumir por dia ${consumo.toFixed(3)} litros de agua`.bgBlue)


