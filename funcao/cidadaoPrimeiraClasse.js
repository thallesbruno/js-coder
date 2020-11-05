//first class object/citizen
//funções como dados

//criar de forma literal
function fun1() { }

//armazenar em uma variável
const fun2 = function () { }

//armazenar em um array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))