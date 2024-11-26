/**
 * Estrutura de dados 
 * Array
 * @author Patrick G
 */
let alunosEM1= ["Tania", "Joao", "Maria", "Eduarda", "Viviane"]
console.clear()
console.log(typeof(alunosEM1))
console.log(alunosEM1)

// o comando abaixo identifica o numero de elementos de um vetor
console.log(alunosEM1.length)

// o comando exibe o indice do array associado ao valor
console.table(alunosEM1)
console.log(alunosEM1[2])

// o comando abaixo adiciona um elemento a um vetor
alunosEM1.push("Patrick")
console.table(alunosEM1)

// para alterar um elemento do vetor e necessario usar o indice
alunosEM1[3] = "Eduarda"
console.table(alunosEM1)

alunosEM1[1] = "Joaozinho"
console.table(alunosEM1)

// o comando abaixo remove um elemento do vetor
alunosEM1.pop()
console.table(alunosEM1)

// remove um elemento especifico sem alterar o indice, e necesseario fornecer o indice do elemento  excluido
delete alunosEM1[1]
console.table(alunosEM1)
