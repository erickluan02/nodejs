/** 
 * App para calcular milhas para KM
 */

//importação do pacote readline-sync
const read = require('readline-sync')

//Variáveis
let milhas, km
console.clear()
console.log("==============================")
console.log("==     Milhas para KM       ==")
console.log("==============================")
console.log("")

//Entrada
milhas = Number(read.question("Digite  avelocidade em milhas: ").replace(",","."))

//Processamento
km = milhas *1.60934

//Saída
console.log(`Velocidade em K/h: ${km.toFixed(2)}`)

