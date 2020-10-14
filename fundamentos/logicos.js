/*
    tabela verdade
    
    v e v -> v
    v e f -> f
    f e ? -> f

    op1 e op2 e op3 e op4 -> v

    v ou ? -> v
    f ou v -> v
    f ou f -> f

    v xor v -> f
    v xor f -> v
    f xor v -> v
    f xor f -> f

    !v -> f
    !f -> v
*/

function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2 //operador curto-circuito
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) //bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete //operador unário

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
    //internamente é feito o par chave-valor
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))