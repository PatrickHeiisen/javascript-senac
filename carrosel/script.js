const imgs = document.getElementById('imagens')
const imagem = document.querySelectorAll('#imagens img')
let indice = 0

function carrosel(){
    indice++
    if(indice >= imagem.length){
        indice = 0
    }
    imgs.style.transform = `translateX(${-indice * 512}px)`
}
setInterval(carrosel, 1800)