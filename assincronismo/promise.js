/**
 * Asssincronismo 
 * Promise
 * @author Patrick G
 */
const input = require('readline-sync')

let login, senha

//Simular banco de dados
const database = {
    admin: {
        usuario: "Administrador",
        senha: "password"
    },
    prof: {
        usuario: "Leandro Ramos",
        senha: "123456"
    }
}
// Autenticação do usuario
console.clear()
console.log("---------------------------------")
console.log("            USUARIO              ")
console.log("---------------------------------")
login = input.question("Login: ")
senha = input.question("Senha: ")
console.log("---------------------------------")

function logar(login, senha) {
    // Uso de promise (acesso ao "banco de dados")
    return new Promise((resolv, reject) => {
        // Simulação de delay no acesso ao banco
        setTimeout(() => {
            // se existir no banco de dados o usuario
            if (database.hasOwnProperty(login)) {
                //Se a senha estiver correta
                if (database[login].senha === senha) {
                    resolv("Autenticação bem sucedida. Ola " + database[login].usuario)
                } else {
                    reject("Senha incorreta. Por favor tente novamente")
                }
            } else {
                reject("Usuario não encontrado")
            }
        }, 2000)
    })
}

// Executar a função logar
// No uso de promise e necessario usar o .them
logar(login, senha)
    .then((message) => {
        console.log(message)
    })
    .catch((error) =>{
        console.log("Erro de autenticação." + error)
    })
