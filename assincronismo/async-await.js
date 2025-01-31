/**
 * Uso de async - await (sintaxe moderna do js para lidar com assincronismo)
 * @author Patrick G
 */
// biblioteca nativa do Js para trabalhar com arquivos
const fs = require('fs')

function criarArquivo(){
    let conteudo = "Patrick Correia\nExemplo de uso de novos recursos de assincronismo no Js (async - await)"
    gravarArquivo("teste.tx", conteudo)
}

async function gravarArquivo(path, conteudo) {
    try{
        await fs.promises.writeFile(path, conteudo)
        console.log("Arquivo gravado com sucesso.")
    }catch(error){
        console.log(error)
    }
}

console.clear()
criarArquivo()
