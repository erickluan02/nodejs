/**
 * ELEITOR - Obrigatoriedade de votar
 */

const read = require('readline-sync')
const colors = require('colors')
let idade

console.clear()
console.log("--------ELEITOR----------")
console.log("")

idade = Number(read.question("digite a sua idade: "))

if (idade < 16) {
    console.log("PROIBIDO VOTAR!".bgGreen)
} else if (idade > 17 && idade < 71) {
    console.log("VOTO OBRIGATORIO!".bgRed)
} else {
    console.log("VOTO FACULTATIVO!".bgYellow)
}