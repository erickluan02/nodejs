/** 
 * Conversor de Libras para Kilos
 */

const read = require('readline-sync')

//Variáveis
let l,k
console.clear()
console.log("==============================")
console.log("==   Conversor de Libras    ==")
console.log("==        para Kilos        ==")
console.log("==============================")
console.log("")

//Entrada
l = Number(read.question("Digite quantidade em libras: ").replace(",","."))

//processamento
k = l / 2.2046

//Saída
console.log(`${k.toFixed(2)}em kilos`)