const rls = require("readline-sync");

var b = 0
var a = 0
var soma = 0 

for (let i = 0; i < 1000; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        b = i
        soma = a + b
        a = soma
    }
}
console.log(a)