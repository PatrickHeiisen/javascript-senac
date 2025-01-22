/**
 * Ano automatico
 * @author Patrick G
 */

let ano = document.getElementById('copyrightYear')

// Inserindo o ano na tag <span>
let anoAtual = new Date().getFullYear()
ano.innerHTML = anoAtual
