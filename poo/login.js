/**
 * Fundamentos da POO - Encapsulamento (Segurança)
 * @author Patrick G
 */
console.clear()

class User{
    // atributos
    constructor(login, senha){
        this.login = login
        // encapsulamento (O _ "underline" enjaula a variavel)
        let _senha = senha
        this.getSenha = () => _senha // leitura
        this.setSenha = (novaSenha) => _senha = novaSenha // escrita
    }
    // metodo
    logar(){
        console.log("=============================================")
        console.log(`Usuario: ${this.login}`)
        console.log(`Senha: ${this.getSenha()}`)
        if (this.login === 'admin' && this.getSenha() === '123@senac') {
            console.log("Usuario Autenticado")
        } else {
            console.log("Usuario e/ou senha invalida(s)")
        }
    }
}

// Sistema

// Criando um novo objeto
const user1 = new User("admin", "1234")
user1.logar()
user1.setSenha("123@senac")
user1.logar()
