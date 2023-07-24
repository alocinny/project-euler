/* Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 
1 and 2, the first 10 terms will be: 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.*/

const rls = require("readline-sync");

function fibonacci(primeiroNumero,segundoNumero){

    var primeiroNumero = 0
    var segundoNumero = 1
    var sequencia = 0
    var temp = 0
    var resultado = 0

    do {
        sequencia = primeiroNumero + segundoNumero

        primeiroNumero = segundoNumero
        segundoNumero = sequencia

        if (sequencia %2 === 0){
            resultado = sequencia + temp
            temp = resultado
        }
    } while(sequencia <= 4000000)

    console.log(temp)
}
fibonacci();