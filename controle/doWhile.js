//pouco usada
//força ser executado o código ao menos 1 vez

function getNumeroAleatorioEntre(max, min) {
    const entre = Math.random() * (max - min) + min
    return Math.floor(entre)
}

let opcao = -1

do {
    opcao = getNumeroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
} while (opcao != -1);

console.log('Até a próxima!')