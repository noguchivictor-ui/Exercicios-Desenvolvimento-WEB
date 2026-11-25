const prompt = require("prompt-sync")();
const matriz = [[1,2,3],[1,2,3],[1,2,3]];
const coluna = Number(prompt("digite o numero de uma coluna: "));

let soma = 0;
if (coluna >= 0 && coluna < matriz.length){
    for(let i = 0;i < matriz.length;i++){
      soma += matriz[i][coluna];
    }
}
console.log(soma);