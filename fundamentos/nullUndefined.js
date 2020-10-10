//atribuicao por valor (em tipos primitivos)
//atribuicao por referência (ref. ao local de memória, para objetos, funções, etc.)

let valor //não inicializada
console.log(valor)

//console.log(valor2)
// erro valor2 is not defined

valor = null // ausencia de valor
console.log(valor)

//console.log(valor.toString())
//Erro!

const produto = {}
console.log(produto.preco) //não está definido o preço dentro do produto

//console.log(produto.preco.a)
//dá erro pois não existe esta propriedade

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evite atribuir undefined, use null ou 0 ao invés disso
console.log(!!produto.preco)

//delete produto.preco
//tirar atrinbuto de um objeto

produto.preco = null //sem preco
console.log(!!produto.preco)
console.log(produto)