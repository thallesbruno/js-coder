//JSON - é um formato textual
//Objeto em JS não é JSON
//É uma coleção de pares chave-valor

const prod1 = {}
prod1.nome = 'Celular Xiaomi'
prod1.preco = 2988.9
prod1['desconto legal'] = 0.40 //evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 45.99,
    obj: {
        testeTeste: 2,
        obj: {
            testeTeste: 3
        }
    }
}

console.log(prod2)

'{"nome": "Camisa Polo", "preco": 45.99}' //JSON