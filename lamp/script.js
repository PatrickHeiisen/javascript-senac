/**
 * Eventos fr Intervalo
 * @author Patrick G
 */

function piscar(){
    let ligada = false
    // função nativa do javascript para gerar intervalos
    // 1000 (1000 = 1s)
    setInterval(() => {
        if (ligada === false) {
            document.getElementById('lamp').src = "img/on.jpg"
        }else{
            document.getElementById('lamp').src = "img/off.jpg"
        }
        ligada = !ligada //!NOT
    },1000)
}