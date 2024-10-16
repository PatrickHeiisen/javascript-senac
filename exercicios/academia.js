/**
 * Ficha de um aluno de academia
 * @author Patrick G Correia
 */

//Variaveis
let nome, idade, altura, peso, vip, fcm, imc

console.clear()

// Entrada de Dados
nome = "Patrick G"
idade = 25
peso = 60
altura = 1.75
vip = true
fcm = 208 - (0.7 * idade)
imc = peso / (altura * altura)

// Saida de Dados
console.log("*************** FICHA DO ALUNO ********************")
console.log()
console.log(`Nome: ${nome}`)
console.log(`idade: ${idade}`)
console.log(`Peso: ${peso}`)
console.log(`Altura: ${altura}`)
console.log(`Vip: ${vip}`)
console.log(`Fcm ${fcm}`)
console.log(`Imc: ${imc.toFixed(2)}`)
console.log()

// tabela imc
if(imc < 18.5){
    console.log("Abaixo do peso")
}else if(imc < 25){
    console.log("Peso ideal")
}else if(imc < 30){
    console.log("Levemente acima do peso")
}else if(imc < 35){
    console.log("Obesidade grau I")
}else if(imc < 40){
    console.log("Obsesidade grau II (severa)")
}else{
    console.log("Obsidade grau III (morbida)")
}