/**
 * Fundamentos da POO
 * @author Patrick G
 */
class Carro {
    // Atributos
    constructor(marca, ano, cor) {
        this.marca = marca
        this.ano = ano
        this.cor = cor
    }
    // Ações
    criarCarro() {
        console.log(`Carro criado: ${this.marca}, ${this.ano}, ${this.cor}`)
    }
    // Método para ligar o carro
    ligar() {
        console.log("O carro está ligado.");
    }
    // Método para desligar o carro
    desligar() {
        console.log("O carro está desligado.");
    }
    // Método para acelerar o carro
    acelera() {
        console.log("O carro está acelerando.");
    }
}

class Modelo extends Carro{
    // Atributos
    constructor(marca, ano, cor, envergadura){
        super(marca, ano, cor)
        this.envergadura = envergadura
    }
    // Ações
    criarAviao(){
        console.log(`Avião criado: ${this.marca}, ${this.cor}, ${this.ano}, ${this.envergadura}`)
    }
    aterrizar(){
        console.log("Avião Aterrizando")
    }
    // Polimorfismo
    acelera(){
        console.log("Avião decolando!!!!");
    }
}

/** Criar dois objetos (carros) */
console.clear()
console.log("┏┓        ")
console.log("┃ ┏┓┏┓┏┓┏┓")
console.log("┗┛┗┻┛ ┛ ┗┛")
console.log("")

// Instanciar um objeto
const  carro1 = new Carro("Golf Gti", 2007, "Branco")
carro1.criarCarro()
carro1.ligar()
carro1.acelera()
carro1.desligar()
console.log("---------------------------------------")

const carro2 = new Carro("Bugati", 2018, "Preto")
carro2.criarCarro()
carro2.ligar()
carro2.acelera()
console.log("Vrummmmmm")
carro2.desligar()

console.log("")

console.log("┏┓  •    ")
console.log("┣┫┓┏┓┏┓┏┓")
console.log("┛┗┗┛┗┗┻┗┛")
console.log("")     

// Instanciar um objeto
const aviao1 = new Modelo("Boeing", "Branco", 2007, 3)
aviao1.criarAviao()
aviao1.aterrizar()
aviao1.acelera()
console.log("---------------------------------------")

const aviao2 = new Modelo("Aeronautics", "Cinza", 2000, 5)
aviao2.criarAviao()
aviao2.aterrizar()
aviao2.acelera()
console.log("---------------------------------------")
