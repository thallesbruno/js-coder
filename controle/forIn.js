const notas = [6.7, 6.9, 7.9, 8.5, 9.6]

for (let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Bruno',
    idade: 32,
    peso: 93
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

//console.log(atributo)