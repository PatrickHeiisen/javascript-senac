/**
 * Estrutura de dados - objetos
 * @author Patrick G
 */

console.clear()

const funcionario1 = {} // objeto
console.log(typeof (funcionario1))

// adicionar dados a estrutura
funcionario1.nome = "Patrick"
funcionario1.cargo = "Professor"
funcionario1.email = "patrickcorreia@gmail.com"
funcionario1.salario = 10000
funcionario1.insta = "@patrickheisen"

// listar os dados da estrutura
//console.log(funcionario1)
console.log(funcionario1.cargo)

// modificar os dados da estrutura
funcionario1.nome = "Rebeca"
console.log(funcionario1)

// excluir dados da estrutura
delete funcionario1.insta
console.log(funcionario1)

const funcionario2 = {
    nome: "Bruce Wayne",
    cargo: "CEO",
    email: "batman@gmail.com",
    salario: 400000
}
console.log(funcionario2)

const endereco1 = {
    logradouro: "Bat Caverna",
    cidade: "Gothan City",
    estado: "Nova Jersey"
}
console.log(endereco1)

const funcionario3 = {
    nome: "Alfrady",
    cargo: "Mordomo",
    email: "alfradybat@gmail.com",
    salario: 20000,
    ...endereco1
}
console.log(funcionario3)

const funcionario4 = {
    nome: "Lady Margarete",
    cargo: "Atriz",
    email: "ladybat@gmail.com",
    salario: 15000,
    ...endereco1
}
console.log(funcionario4)

const funcionario5 = {
    nome: "tony stark",
    cargo: "Engenheiro",
    email: "ironman@gmail.com",
    salario: 375000,
    armadura: {
        versao: "Mark ll",
        ano: 2010,
        reator: "Arc 01"
    },
    suitUp: () => {
        console.log("🤖")
    }
}
console.log(funcionario5)
console.log(funcionario5.cargo)
console.log(funcionario5.armadura.versao)
funcionario5.suitUp() // Executar a função interna da estrutura