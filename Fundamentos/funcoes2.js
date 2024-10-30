/**
 * Estudo das funçoes com parametros e retorno
 * @author Patrick G
 */

function somar(a, b){
    return (console.log(a + b))
}
somar(5,2)

const somarA = function(a, b){
    return (console.log(a + b))
}
somar(5,3)

const somarAF = (a, b) =>{
    return (console.log(a + b))
}
somarAF(2,2)

// na função a baixo o retorno e implicito
const somarAFS = (a, b) => console.log(a + b)
somarAFS(3,9)

