let num1 = 1
let num2 = 2

num1++ //posfixada
console.log(num1)
--num1 //prefixada
console.log(num1)

console.log(++num1 === num2--) //tentar evitar para deixar o código mais legível
console.log(num1 === num2)