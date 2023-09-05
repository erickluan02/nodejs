/** 
 * Conversor de Dolar para Real 
 */

//importação do pacote readline-sync
const read = require('readline-sync')

//Importação do pacote colors
const colors = require('colors')

//Variáveis
let dolar, real

console.clear()
console.log("=======================")      
console.log("==  Dolar para Real  ==")
console.log("=======================")
console.log("")

//Entrada
dolar = Number(read.question("Digite o quanto voce quer converter em Dólar: ").replace(",","."))
real = Number(read.question("Digite a cotacao atual do real: ").replace(",","."))

//Processamento
dolar * real 

//Saída 
console.log(`R$:${dolar * real}`)