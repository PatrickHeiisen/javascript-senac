/**
 * Estudo das funcoes simples
 * @author Patrick G
 */

// função literal
hello()
function hello(){
    console.log("Hello function")
}
console.log(typeof(hello))

// função atribuidas
// funções atribuidas precisam ser criadas no inicio do codigo antes da chamada da função
const hello2 = function(){
    console.log("Hello Function 2")
}
hello2()
console.log(typeof(hello2))

// Arrow function(forma simplificada de criar uma função atribuida)
const hello3 = () => {
    console.log("Hello Function 3")
}
hello3()
console.log(typeof(hello3))

// arrow function mais simplificado (neste caso so e possivel executar uma linha de codigo)
const hello4 = _ => console.log("Hello Function")
hello4()
console.log(typeof(hello4))