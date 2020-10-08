/*Em Javascript, array:
    *Cresce e diminui de acordo com o uso
    *É heterogêneo
*/

const valores = [7.5, 10.0, 9.9, 8.5]
console.log(valores[0], valores[3])

valores[10] = 50
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop())
delete valores[0]
console.log(valores)

console.log(typeof valores)