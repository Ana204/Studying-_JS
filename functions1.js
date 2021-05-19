console.log("second Lesson on functions")

//Podemos declarar funções dentro de variaveis
//Function expression or function anonymous

//passando parâmetros(parameters) para a função
const sum = function(number1, number2){

    console.log(number1 + number2)
    console.log(number1 - number2)
    console.log(number1 * number2)
    console.log(number1 / number2)
}

//chamo a minha variável que guarda a minha função, passando dois argumentos(arguments) para ela
//sendo assim number1 recebe o valor 2 e number2 recebe o valor 3
sum(2,3)