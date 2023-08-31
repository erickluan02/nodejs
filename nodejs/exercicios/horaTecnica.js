/** 
 * Cálculo do valor da hora de serviço
 */

//importação do pacote readline-sync
const read = require('readline-sync')

//Variáveis
let remuneracao, custo, horasMes, horaTecnica, estimativa, total
console.clear()
console.log("=================================")
console.log("== Cálculo do valor de serviço ==")
console.log("=================================")
console.log("")

//Entrada 1
remuneracao = Number(read.question("Remuneracao mensal pretendida: ").replace(",","."))
horasMes = Number(read.question("Carga horaria mensal de trabalho: ").replace(",","."))
custo = Number(read.question("Custo operacional: ").replace(",","."))
//Processamento 1 
horaTecnica = (remuneracao + (0.3 * remuneracao) + custo + (0.2 * remuneracao)) / horasMes
//Saída 1 
console.log(`Hora Técnica: R$ ${horaTecnica.toFixed(2)}`)
console.clear()
//Entrada 2
estimativa = Number(read.question("Estimativas de horas deste servico: ").replace(",","."))
//Prrocessamento 2 
total = horaTecnica * estimativa
//Saída 2 
console.log(`Total a ser cobrado do cliente: R$ ${total.toFixed(2)}`)
