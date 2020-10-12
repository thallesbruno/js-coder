var numero = 1
{
    var numero = 2
    console.log('dentro = ', numero)
}

console.log('fora = ', numero)

//fuja do escopo global

//só existe escopo para var dentro de function,
// dentro de bloco simples {} ela se torna variável blobal