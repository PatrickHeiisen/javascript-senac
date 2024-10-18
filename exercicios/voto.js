/**
 * Conferindo Voto
 * @author Patrick G
 */
const input = require('readline-sync')

let idade

console.clear()
console.log("Verificar Idade para Voto")

idade = Number(input.question("Digite sua idade: "))

console.log(`Sua idade para votar e ${idade} anos`)

if(idade < 16){
    console.log("Proibido Votar")
}else if(idade > 17 && idade < 71){
    console.log("Voto Obrigatorio")
}else{
    console.log("Voto Facultativo")
}
