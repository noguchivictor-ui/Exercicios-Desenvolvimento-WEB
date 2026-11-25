//EXERCICIO 1

// const numeros = [-1,2,0];

// let positivo = 0;
// let negativo = 0;
// let zero = 0;

// for(let i = 0; i < numeros.length; i++){
//     if( numeros[i] > 0){
//         positivo++;
//     } else if(numeros[i] == 0){
//         zero++;
//     } else{
//         negativo++;
//     }
// }
// console.log("quantidade de numeros positvos:       "+ positivo);
// console.log("quantidade de numeros iguais a zero:  "+ zero);
// console.log("quantidade de numeros negativoa:      "+ negativo);

// EXERCICIO 2
// const notas = [2,7];

// let soma = 0;
// let acima = 0;
// let abaixo = 0;
// let maiornota = notas[0];
// let menornota = notas[0];

// for(let i = 0; i < notas.length;i++){
//     soma += notas[i];
//     if(notas[i] > maiornota){
//         maiornota = notas[i];
//     } else if(notas[i] < menornota){
//         menornota = notas[i];
//     } 
// }
// let media = soma / notas.length;
// for(let i = 0;i < notas.length;i++){
//     if(notas[i] >= media){
//         acima++;
//     } else{
//         abaixo++;
//     }
    
// }
// console.log("media:"          + media);
// console.log("acima da media:" + acima);
// console.log("abaixo da media:"+ abaixo);
// console.log("maior nota:"     + maiornota);
// console.log("menor nota:"     + menornota);

// EXERCICIO 3

// const prompt = require("prompt-sync")();

// const produtos = ["arroz", "batata"];

// const escolha = prompt("digite o nome do produto:");
// for(let i = 0;i < produtos.length;i++){
//     if(escolha.toLowerCase() == produtos[i]){
//         console.log("Produto encontrado, posicao:"+ i);
//         break;
//     }
// }

// EXERCICIO 4
// const numeros = [1,2];
// for(let i = 0; i < numeros.length; i++){
//     console.log(numeros[i]);
// }
// for(let i = numeros.length; i >=0;i--){
//     console.log(numeros[i]);
// }

//EXERCICIO 5
// const numeros = [2];
// const dobro = [];
// for(let i = 0;i < numeros.length;i++){
//     dobro[i] = numeros[i] * 2;
// }
// console.log(dobro);

// EXERCICIO 6
// const temperatura = [19,25,36];

// let soma = 0;
// let maior = temperatura[0];
// let menor = temperatura[0];
// let acimaMEdia = 0;
// for(let i = 0; i < temperatura.length; i++){
//     soma += temperatura[i];
//     if(temperatura[i] > maior){
//         maior = temperatura[i];
//     } else if(temperatura[i] < menor){
//         menor = temperatura[i];
//     }
// }
// let media = soma / temperatura.length;
// for(let i = 0; i < temperatura.length; i++){
//     if(temperatura[i] > media){
//         acimaMEdia++;
//     }
// }
// console.log("media:"+ media);
// console.log("maior:"+ maior);
// console.log("menor:"+ menor);
// console.log("dias acima da media:"+ acimaMEdia);

// EXERCICIO 7
// const numeros = [1,2,1,2];

// let par = 0;
// let impar = 0;
// let somaPar = 0;
// let somaImpar = 0;

// for(let i = 0; i < numeros.length; i++){
//     if(numeros[i] % 2 == 0){
//         par++;
//         somaPar += numeros[i];
//     } else {
//         impar++;
//         somaImpar += numeros[i];
//     }

// }
// console.log("numeros pares:"+ par);
// console.log("numeros impares:"+ impar);
// console.log("soma dos pares:"+ somaPar);
// console.log("soma dos impares:"+ somaImpar);

//EXERCICIO 8

// const numeros = [1,-1,1];
// const positivos = [];

// for(let i = 0; i < numeros.length;i++){
//     if(numeros[i] > 0){
//         // positivos[i] = numeros[i];
//         positivos.push(numeros[i]);
//     }
// }
// console.log(positivos);

// EXERCICIO 9
// const prompt = require("prompt-sync")();

// const numeros = [1,2,1];
// const posicao = [];
// const escolha = prompt("digite um valor:");
// for(let i = 0; i < numeros.length; i++){
//     if(escolha == numeros[i]){
//         posicao.push(numeros[i]);
//         console.log("numero encontrado na posicao:"+ i);
//     } 
// }
// if(posicao.length == 0){
//     console.log("valor nao encontrado");
// }

// //EXERCICIO 10
//  const numeros = [2,4,4,5];
//  const semRepeticao = [];
//  for(let i = 1;i < numeros.length; i++){
//      for(let j = i + 1;j<numeros.length;j++){
//         if(numeros[i] === numeros[j]){
//             semRepeticao.push(numeros[i]);
//         }
//      }
//     }
 
//  console.log(semRepeticao);

// EXERCICIO 11
// const a = [2];
// const b = [3];
// const neww = [];

// for(let i = 0;i < a.length;i++){
//     neww.push(a[i]);
// }
// for(let i = 0;i < b.length;i++){
//     neww.push(b[i]);
// }
// console.log(neww);

//EXERCICIO 12
// const a = [1,2,3];
// const b = [1,4,3];
// let total = 0;
// const indice = [];
// for(let i =0;i< a.length;i++){
//     if(a[i] == b[i]){
//         total++;
//         indice.push(i);
//     }
// }
// console.log("TOTAL:"+total);
// console.log("indices dos valores que sao iguais:"+ indice);

//EXERCICIO 13
// const numeros = [1,2,3];


// let posicaoMaior = 0;
// let posicaoMenor = 0;
// for(let i = 0; i < numeros.length; i++){
//     if(numeros[i] > numeros[posicaoMaior]){
//         posicaoMaior = i;
//     } else if(numeros[i] < numeros[posicaoMenor]){
//         posicaoMenor = i;
//     }

// }
// let temporario = numeros[posicaoMaior];
// numeros[posicaoMaior] = numeros[posicaoMenor];
// numeros[posicaoMenor] = temporario;
// console.log(numeros);

// EXERCICIO 14
// const numeros = [2, 0,5];
// const novo = [];

// for(let i = 0;i < numeros.length;i++){
//     if(numeros[i] !== 0){
//         novo.push(numeros[i]);
//     }
// }
// for(let i = 0;i < numeros.length;i++){
//     if(numeros[i] == 0){
//         novo.push(numeros[i]);
//     }
// }
// console.log(novo);

// EXERCICIO 15 
// const numeros = [2,4,4];

// let maior = numeros[0];
// let segundomaior = null;

// for(let i = 0;i< numeros.length;i++){
//     if(numeros[i]> maior){
//         segundomaior = maior;
//         maior = numeros[i];
//     }

// }
// if(segundomaior === null){
//     console.log("nao existe o segundo maior valor");
// }else{
//     console.log("maior valor:"+ maior);
//     console.log("segundo maior valor:"+ segundomaior);
// }
// EXERCICIO 16
// const numeros = [1,2,3];

// let sequencia_atual = 1;
// let maior_sequencia = 1;
// for(let i = 0;i <numeros.length;i++){
//     if(numeros[i] === numeros[i -1] + 1){
//         sequencia_atual++;
//     } else{
//         sequencia_atual = 1;
//     }
//     if(sequencia_atual > maior_sequencia){
//         maior_sequencia = sequencia_atual;
//     }
// }
// console.log("amior sequencia:"+ maior_sequencia);

// EXERCICIO 17
// const numeros = [1,2,3,4];
// let k = 2;
// k = k % numeros.length;
// const novo = [];

//         for(let i = 0; i < numeros.length; i++){
//             const novaPosicao = (i + k) % numeros.length;
//             novo.push(numeros[novaPosicao]);
//         }
// console.log(novo);

// EXERCICIO 18
// const numeros = [0,1,2,3,4];
// let alvo = 3;
// const pares = [];
// for(let i = 0;i < numeros.length;i++){
//     for(let j = i + 1; j < numeros.length;j++){
//         if(numeros[i] + numeros[j] === alvo){
//         pares.push(numeros[i],numeros[i + 1]);
//         }
//     }
// }
// if(pares.length > 0){
//     console.log(pares);
// }else{
//     console.log("nenhum par encontrado");
// }
//EXERCICICO 19
// const a = [1,2];
// const b = [2,3];
// const novo = [];

// for(let i=0;i < a.length;i++){
//     for(let j = 0;j < b.length;j++){
//         if(a[i] === b[j]){
//             novo.push(a[i]);
//         }
//     }
// }
// console.log(novo);
//EXERCICIO 20
// const numeros = [1,2,4,2];

// for(let i = 0;i < numeros.length;i++){
//     let cont = 1;
//     for(let j = i + 1; j < numeros.length;j++ ){
//         if(numeros[i] === numeros[j]){
//             cont++; 
//         }
//     }
//     console.log(numeros[i]+ "-->"+ cont+"vezes");
// }