/**
 * Exemplo de uso do metodo para gerar numeros aleatorios e usao da estrutura Do While
 * Jogo do Dado
 * @author Patrick
 */
const input = require(`readline-sync`)

let face, opcao

console.log("Jogo do Dado")
input.question("Pressione a tecla [Enter] para jogar o dado")

do {
    console.clear()
    console.log("Jogo do Dado")
    
    // Sorteio da face de um dado
    // Math classe matematica
    // Floor() conversao para numeros inteiros
    // Random() * (Gerador de numeros aleatorios)

    face = Math.floor(Math.random() * 6 + 1)
    console.log(`Face do Dado: ${face}`)

    opcao = input.question("Deseja jogar novamente s/n: ")
} while (opcao === 's');

