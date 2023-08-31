/**
 * Cálculo de porcentagem
 */

const read = require('readline-sync')
//Variáveis
let n,p,r
console.clear()
console.log("==============================")
console.log("==  Cálculo de Porcentagem  ==")
console.log("==============================")
console.log("")


n= Number(read.question("digite o numero ").replace(",","."))
p= Number(read.question("digite a porcentagem").replace(",","."))

r = (n * p)/100

console.log (`${r} é ${p} de ${n}`)
