const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) { //múltiplas seleções
        case 10:
        case 9:
            console.log('Quadro de Honra.')
            break
        case 8: case 7:
            console.log('Aprovado.')
            break
        case 6: case 5: case 4:
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado.')
            break
        default:
            console.log('Nota inválida')
    }
    
    console.log('Fim!')
}

imprimirResultado(10)
imprimirResultado(8.9) //vai arredondar
imprimirResultado(6.55) //vai arredondar
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)