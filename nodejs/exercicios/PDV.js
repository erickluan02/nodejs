/**
 * PDV - ponto de venda
 */

// importação de módulos
const read = require('readline-sync')

//Variáveis 
let total, desconto, valor, dinheiro, troco

console.clear()
console.log("==============================")
console.log("==  Mercadão show de bola   ==")
console.log("==============================")
console.log("")

//Entrada 1 
valor = Number(read.question("Digite o valor da compra: ").replace(",","."))
desconto = Number(read.question("Digite o valor do desconto em %: ").replace(",","."))
//Processamento 1 
total = valor - ((desconto * valor) / 100)
//saida 1
console.log(`Total: R$ ${total.toFixed(2)}`)
console.log("")
console.log("________________________________")
dinheiro = Number(read.question("Digite o valor em money: ").replace(",","."))
//Processamento 2 
troco = dinheiro - total 
//saída 2
console.log(`Troco: R$ ${troco.toFixed(2)}`)