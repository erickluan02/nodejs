/** 
 * Conversor de temperatura
 * Fahrenheit para Celsius
 */

const read = require('readline-sync')

//Variáveis
let c,f
console.clear()
console.log("==============================")
console.log("== Conversor de Temperatura ==")
console.log("==  Fahrenheit para Celsiu  ==")
console.log("==============================")
console.log("")
//Entrada
f = Number(read.question("Digite a temperatura em Fahrenheit ").replace(",","."))

//processamento
c = (f - 32) / 1.8
//Saída
console.log(`Temperatura em celsius: ${c.toFixed(1)}ºC`)