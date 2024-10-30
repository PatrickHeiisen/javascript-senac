/**
 * Jogo JOKENPO
 * @author Patrick G
 */
// biblioteca
const input = require('readline-sync')

// variaveis
let jogador, computador, opcao

do {
    // saida de dados
    console.clear()
    console.log('___________JoKenPo__________')
    console.log("1.Pedra")
    console.log("2.Papel")
    console.log("3.Tesoura")

    // logica do jogador
    jogador = Number(input.question("Escolha uma opcao: "))
    console.log("")
    switch (jogador) {
        case 1:
            console.log("Jogador escolheu Pedra")
            break
        case 2:
            console.log("Jogador escolheu Papel")
            break
        case 3:
            console.log("Jogador escolheu Tesoura")
            break
        default:
            console.log("Opção Invalida")
            break
    }

    // logica do computador
    computador = Math.floor(Math.random() * 3 + 1)
    switch (computador) {
        case 1:
            console.log("Computador escolheu Pedra")
            break
        case 2:
            console.log("Computador escolheu Papel")
            break
        case 3:
            console.log("Computador escolheu Tesoura")
            break
    }

    // logica para determinar o venvedor ou empate
    if (jogador === computador) {
        console.log("EMPATE")
    }
    else if (jogador === 1 && computador === 3 || jogador === 2 && computador === 1 || jogador === 3 && computador === 2) {
        console.log("JOGADOR VENCEU")
    }
    else {
        console.log("COMPUTADOR VENCEU")
    }

opcao = input.question("Deseja jogar novamente s/n: ")
} while (opcao === 's');
