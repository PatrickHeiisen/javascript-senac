/**
 * Exemplo de uso do metodo para gerar numeros aleatorios
 * Jogo do Dado
 * @author Patrick
 */
const input = require(`readline-sync`)

let face

console.clear()
console.log("Jogo do Dado")
input.question("Pressione a tecla [Enter] para jogar o dado")

// Sorteio da face de um dado
// Math classe matematica
// Floor() conversao para numeros inteiros
// Random() * (Gerador de numeros aleatorios)

face = Math.floor(Math.random() * 6 + 1)
console.log(`Face do Dado: ${face}`)