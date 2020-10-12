let numero = 1
{
    let numero = 2
    console.log('dentro = ', numero)
    //se não houver variável dentro do bloco,
    //ele busca por uma variaável fora do bloco/escopo
}

console.log('fora = ', numero)