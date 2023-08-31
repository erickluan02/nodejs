/** 
 * PDV para lucro
 */

const read = require('readline-sync')

//Variáveis
let c,l,v,t
console.clear()
console.log("==============================")
console.log("==          PDV             ==")
console.log("==============================")
console.log("")

//Entrada 
c= Number(read.question("digite o custo: ").replace(",","."))
l= Number(read.question("digite a lucro: ").replace(",","."))

//Processamento
t = (c * l)/100
v = c + t 

//saida
console.log (` total é: ${v} `)