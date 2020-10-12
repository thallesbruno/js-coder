// par nome/valor
const saudacao = 'Opa' //contexto léxico 1

function exec(){
    const saudacao = 'Fala!' //contexto léxico 2
    return saudacao
}

//objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Bruno',
    idade: 33,
    peso: 93,
    endereco: {
        logradouro: 'Rua Teste',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)