/** 
 * APP etanol X gasolina 
 */

//importação do pacote readline-sync
const read = require('readline-sync')

//Importação do pacote colors
const colors = require('colors')

//Variáveis
let gasolina, etanol

console.clear()
console.log("=======================")      
console.log("== Etanol X Gasolina ==") 
console.log("=======================")
console.log("")

//Entrada
gasolina = Number(read.question("Digite o valor da gasolina: ").replace(",","."))
etanol = Number(read.question("Digite o valor do etanol: ").replace(",","."))

//processamento/saída
if (etanol < 0.7 * gasolina) {
    console.log("Vai no Etanol meu bom!".bgGreen) 
} else {
    console.log("Vai na Gasolina meu nobre!".bgRed)
}