/**
 * Data automatica no rodape
 * @author Patrick
 */
function obterData() {
    const data = new Date()
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    return `${data.toLocaleDateString('pt-br', options)} - ${data.toLocaleTimeString('pt-br')}`
}

function atualizarData() {
    // a linha abaixo insere na tag <p> identificando como dataAtual o retorno da função
    document.getElementById('dataAtual').innerHTML = obterData()
}

// Atualizar data e hora a cada segundo
setInterval(atualizarData, 1000)