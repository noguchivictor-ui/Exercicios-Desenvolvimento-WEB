//EXERCICIO1
// const matriz = [[1,2,3],[1,2,3],[1,2,3]];

// for(let i = 0;i < matriz.length;i++){
//     for(let j = 0;j < matriz.length;j++){
//         console.log(matriz[i][j]);
//     }
// }
//EXERCICIO2
// const prompt = require("prompt-sync")();
// const matriz = [[0,0,0],[0,0,0],[0,0,0]]

// for(let i = 0;i < matriz.length;i++){
//     for(let j = 0;j < matriz.length;j++){
//         matriz[i][j] = Number(prompt(`digite um valor para a posicao, matriz [${i}][${j}]:`));
//     }
// }
// console.log(matriz);

//EXERCICIO3
// const matriz = [[1,2,3],[1,2,3],[1,2,3]];

// for(let i = 0;i < matriz.length;i++){
//     let valorlinha = "";
//     for(let j = 0;j < matriz.length;j++){
//         valorlinha += matriz[i][j] + "\t";
//     }
//     console.log(valorlinha);
// }

//EXERCICIO4
// const matriz = [[1,2,3],[1,2,3],[1,2,3]];

// let soma = 0;
// for(let i = 0;i < matriz.length;i++){
//     for(let j = 0;j < matriz.length;j++){ 
//         soma += matriz[i][j];
//     }
// }
// console.log(soma);

//EXERCICIO5
// const matriz = [[1,2,3],[1,2,3],[1,2,3]];

// let soma = 0;
// quantidade = 0;
// for(let i = 0;i < matriz.length;i++){
//     for(let j = 0;j < matriz.length;j++){ 
//         soma += matriz[i][j];
//         quantidade++;
//     }
// }
// let media = soma/ quantidade;
// console.log(media);

//EXERCICIO6
// const matriz = [[1,2,3],[1,2,3],[1,2,3]];

// let maior = matriz[0][0];
// for(let i = 0;i < matriz.length;i++){
//     for(let j = 0;j < matriz.length;j++){ 
//         if(matriz[i][j] > maior){
//             maior = matriz[i][j];
//         }
//     }
// }
// console.log("maior valor  "+ maior);

//EXERCICIO7
// const matriz = [[1,2,3],[1,2,3],[1,2,3]];

// let menor = matriz[0][0];
// for(let i = 0;i < matriz.length;i++){
//     for(let j = 0;j < matriz.length;j++){ 
//         if(matriz[i][j] < menor){
//             menor = matriz[i][j];
//         }

//     }
// }
// console.log(menor);

//EXERCICIO8
// const prompt = require("prompt-sync")();
// const matriz = [[1,2,3],[1,2,3],[1,2,3]];
// const valor = Number(prompt("digite um valor"));


// let contador = 0;
// for(let i = 0;i < matriz.length;i++){
//     for(let j = 0;j < matriz.length;j++){ 
//         if(matriz[i][j] === valor){
//             contador++;
//         }

//     }
// }

// console.log("valor recebido aparece na matriz "+ contador + " vezes");

//EXERCICIO9
// const prompt = require("prompt-sync")();
// const matriz = [[1,2,3],[1,2,3],[1,2,3]];
// const valor = Number(prompt("digite um valor"));

// const posicoes =[];
// for(let i = 0;i < matriz.length;i++){
//     for(let j = 0;j < matriz.length;j++){ 
//         if(matriz[i][j] === valor){
//             posicoes.push(i);
//         }

//     }
// }
// if (posicoes.length !== 0){
//     console.log("valor recebido aparece nas posicoes"+ posicoes);
// }else{
//     console.log("valor nao encontrado em nenhuma posicao");
// }

//EXERCICIO10
// const matriz = [[1,2,3],[1,2,3],[1,2,3]];
// let pares = 0;
// const posicoes =[];
// for(let i = 0;i < matriz.length;i++){
//     for(let j = 0;j < matriz.length;j++){ 
//         if(matriz[i][j] % 2 == 0){
//             posicoes.push(matriz[i][j]);
//             pares++;
//         }

//     }
// }
// if (posicoes.length !== 0){
//     console.log("valores pares da matriz: "+ posicoes +". Foram encontrado "+ pares +" numeros pares");
// }else{
//     console.log("valor nao encontrado em nenhuma posicao");
// }

//EXERCICIO11
// const prompt = require("prompt-sync")();
// const matriz = [[1,2,3],[1,2,3],[1,2,3]];
// const linha = Number(prompt("digite o numero de uma linha:"));
// let soma = 0;

// if(linha >= 0 && linha < matriz.length){
    
//         for(let j = 0;j < matriz.length;j++){ 
//             soma += matriz[linha][j];
//         }

    
// } else{
//     console.log("erro");
// }
// console.log(soma);

//EXERCICIO12
// const prompt = require("prompt-sync")();
// const matriz = [[1,2,3],[1,2,3],[1,2,3]];
// const coluna = Number(prompt("digite o numero de uma coluna: "));

// let soma = 0;
// if (coluna >= 0 && coluna < matriz.length){
//     for(let i = 0;i < matriz.length;i++){
//       soma += matriz[i][coluna];
//     }
// }else{
//     console.log("eero");
// }
// console.log(soma);

//EXERCICIO13

// const matriz = [[1,2,3],[1,2,3],[1,2,3]];

//     for(let i = 0;i < matriz.length;i++){
//         let maior = matriz[0][0];
//       for(let j = 0;j<matriz.length;j++){
//         if(matriz[i][j] > maior){
//             maior = matriz[i][j];
//         }
//       }
//       console.log("maior valor da linha "+ i +": "+maior);
//     }

//EXERCICIO 14
// const matriz = [[1,2,3],[1,2,3],[1,2,3]];

//     for(let i = 0;i < matriz.length;i++){
//         let menor = matriz[0][0];
//       for(let j = 0;j<matriz.length;j++){
//         if(matriz[i][j] < menor){
//             menor = matriz[i][j];
//         }
//       }
//       console.log("maior valor da linha "+ i +": "+menor);
//     }

//EXERCICO 15
// const matriz = [[1,2,3],[1,2,3],[1,2,3]];

//     for(let i = 0;i < matriz.length;i++){
//       for(let j = 0;j<matriz.length;j++){
//         if(i === j){
//             console.log(matriz[i][j]);
//         }
//       }
//     }

//EXERCCIO 16
// const matriz = [[1,2,3],[1,2,3],[1,2,3]];
// let soma = 0;
//     for(let i = 0;i < matriz.length;i++){
//       for(let j = 0;j<matriz.length;j++){
//         if(i === j){
//             console.log(matriz[i][j]);
//             soma += matriz[i][j];
//         }
//       }
//     }
//     console.log("soma: "+ soma);

//EXERCICIO 17
// const matriz = [[1,2,3],[1,2,3],[1,2,3]];
//     for(let i = 0;i < matriz.length;i++){
//       for(let j = 0;j<matriz.length;j++){
//         if(j === matriz.length - i -1){
//             console.log(matriz[i][j]);
//         }
//       }
//     }

//EXERCICIO 18
// const matriz = [[1,2,3],[1,2,3],[1,2,3]];
// let somaDP = 0;
// let somaDS = 0;
//     for(let i = 0;i < matriz.length;i++){
//       for(let j = 0;j<matriz.length;j++){
//         if(i === j){
//             somaDP += matriz[i][j];
//         }
//         if(j === matriz.length - i -1){
//             somaDS += matriz[i][j];
//         }
//       }
//     }
//     console.log("somaDP: "+ somaDP+ "e somaDS:"+somaDS );

//EXERCCIO 19
// const matriz = [[1,2,3],[1,2,3],[1,2,3]];
//     for(let i = 0;i < matriz.length;i++){
//       for(let j = 0;j<matriz.length;j++){
//         if(j > i){
//             console.log(matriz[i][j]);
            
//         }
//       }
//     }
//
//EXERCICIO 20
// const matriz = [[1,2,3],[1,2,3],[1,2,3]];
//     for(let i = 0;i < matriz.length;i++){
//       for(let j = 0;j<matriz.length;j++){
//         if(i > j){
//             console.log(matriz[i][j]);
            
//         }
//       }
//     }
// EXERCICIO 21
// const matriz = [[1,2,3],[1,2,3],[1,2,3]];
// const matriz2 = [[1,2,3],[1,2,3],[1,2,3]];
// const resultado = [[,,],[,,],[,,]];
//     for(let i = 0;i < matriz.length;i++){
//       for(let j = 0;j<matriz.length;j++){
//         resultado[i][j] = matriz[i][j] + matriz2[i][j];
//       }
//     }
// console.log(resultado);

//EXERCICIO 22
// const matriz = [[1,2,3],[1,2,3],[1,2,3]];
// const matriz2 = [[1,2,3],[1,2,3],[1,2,3]];
// const resultado = [[,,],[,,],[,,]];
//     for(let i = 0;i < matriz.length;i++){
//       for(let j = 0;j<matriz.length;j++){
//         resultado[i][j] = matriz[i][j] - matriz2[i][j];
//       }
//     }
// console.log(resultado);
// EXERCICIO 23
// const matriz = [[1,2,3],[1,2,3],[1,2,3]];
// const resultado = [[,,],[,,],[,,]];
// let valor = 2;
//     for(let i = 0;i < matriz.length;i++){
//       for(let j = 0;j<matriz.length;j++){
//         resultado[i][j] = matriz[i][j] * valor;
//       }
//     }
// console.log(resultado);
//EXERCICIO 24
// const matriz = [[1,2,3],[1,2,3],[1,2,3]];
// const matriz2 = [[1,3,3],[1,2,3],[1,2,3]];
// let situacao = true;
//     for(let i = 0;i < matriz.length;i++){
//       for(let j = 0;j<matriz.length;j++){
//         if(matriz[i][j] !== matriz2[i][j]){
//             situacao = false;
//             break;
//         }
//       }
//     }
//     if(situacao === true){
//         console.log("matrizes iguais");
//     }else{
//         console.log("sao diferentes");
//     }

//EXERCICIO 25
// const matriz = [[1,2,3],[1,2,3],[1,2,3]];
// const transposta = [[,,],[,,],[,,]];
//     for(let i = 0;i < matriz.length;i++){
//       for(let j = 0;j<matriz.length;j++){
//         transposta[j][i] = matriz[i][j];
//       }
//     }
// console.log(transposta);

//EXERCICIO 26
// const matriz = [[1,2,3],[1,2,3],[1,2,3]];
// const matriz2 = [[1,2,3],[1,2,3],[1,2,3]];
// const resultado = [[,,],[,,],[,,]];
//     for(let i = 0;i < matriz.length;i++){
//       for(let j = 0;j<matriz2.length;j++){
//         let soma = 0;
//        for(let k = 0;k < matriz2.length;k++){
//         soma+= matriz[i][k] * matriz2[k][j];
//        }
//        resultado[i][j] = soma;
//       }
//     }
// console.log(resultado);

//EXERCICIO27
// const matriz = [[1,2,3],[1,2,3]];


// let dP = 1;
// let dS = 1;
// for(let i = 0;i< matriz.length;i++){
//     for(let j =0;j<matriz.length;j++){
//         if(i === j){
//             dP *= matriz[i][j];
//         }
//         if(j === matriz.length - i -1){
//             dS *= matriz[i][j];
//         }
//     }
// }
// let determinante = dP - dS;
// console.log(determinante);
// 
// EXERCICIO 28
// const matriz = [[8,2,3],[1,2,3],[1,9,3]];

// const lado1 = matriz[0][0] * matriz[1][1] * matriz[2][2] + matriz[0][2] * matriz[1][0] * matriz[2][1] + matriz[0][1] * matriz[1][2] * matriz[2][0];
// const lado2 = matriz[0][2] * matriz[1][1] * matriz[2][0] + matriz[0][0] * matriz[1][2] * matriz[2][1] + matriz[0][1] * matriz[1][0] * matriz[2][2];

// const determinante = lado1 - lado1;
// console.log(determinante);

// EXERCICIO 29
// const matriz = [[9,2],[1,2]];


// let dP = 1;
// let dS = 1;
// for(let i = 0;i< matriz.length;i++){
//     for(let j =0;j<matriz.length;j++){
//         if(i === j){
//             dP *= matriz[i][j];
//         }
//         if(j === matriz.length - i -1){
//             dS *= matriz[i][j];
//         }
//     }
// }
// let determinante = dP - dS;
// if(determinante !== 0){
//     const inversa = [[,],[,]];
//     for(let i = 0;i < matriz.length;i++){
//         for(let j = 0;j < matriz.length;j++){
//             inversa[i][j] = matriz[i][j] / determinante;
//         }
//     }
//     console.log(inversa);
// }
//EXERCICIO 30
// const matriz = [[1,0],[0,1]];

// let situacao = true;
// for(let i = 0;i< matriz.length;i++){
//     for(let j =0;j<matriz.length;j++){
//         if(i === j){
//             if(matriz[i][j] !== 1){
//                 situacao = false;
//                 break;
                
//             }
//         } else{
//             if(matriz[i][j] !== 0){
//                 situacao = false;
//                 break;
//             }
//         }
        
//     }
// }
// console.log(situacao);

//EXERCICIO 31
// const matriz = [[9,2],[1,2]];


// let indicelinha1 = 0;
// let indicelinha2 = 1;

// for(let j =0;j<matriz.length;j++){
//     let temporario = matriz[indicelinha1][j];

//     matriz[indicelinha1][j] = matriz[indicelinha2][j];
//     matriz[indicelinha2][j] = temporario;
// }
// console.log(matriz);

//EXERCICIO 32
// const matriz = [[9,2],[1,2]];


// let indicecoluna1 = 0;
// let indicecoluna2 = 1;
// for(let i = 0;i< matriz.length;i++){
//     let temporario = matriz[i][indicecoluna1];

//     matriz[i][indicecoluna1] = matriz[i][indicecoluna2];
//     matriz[i][indicecoluna2] = temporario;
// }
// console.log(matriz);

// EXERCICIO 33
// const matriz = [[9,2,3],[1,2,4],[1,2,3]];

// for(let i = 0;i< matriz.length;i++){
//     let inicio = 0;
//     let fim = matriz.length -1;
//     while(inicio < fim){
//         temporario = matriz[i][inicio];

//         matriz[i][inicio] = matriz[i][fim];
//         matriz[i][fim] = temporario;

//         inicio++;
//         fim--;
//     }
// }
// console.log(matriz);
//
//EXERCICIO 34
// const matriz = [[9,2,3],[1,2,3],[1,2,3]];


// let inicio = 0;
// let fim = matriz.length -1;
// while(inicio<fim){
//     let temporario = matriz[inicio];

//     matriz[inicio] = matriz[fim];
//     matriz[fim] = temporario;

//     inicio++;
//     fim--;
// }
// console.log(matriz);

//EXERCICCIO 36
// const matriz = [[1,1],[1,1]];
// let situacao = true;
// for(let i = 0;i< matriz.length;i++){
//     for(let j = 0;j<matriz.length;j++){
//         if(matriz[j][i] !== matriz[i][j]){
//             situacao = false;
//             break;
//         }

//     }
// }    
// console.log(situacao);

//EXERCICIO 35
// const matriz = [[9,2],[1,2]];

// const matriz2 = [[,],[,]];
// for(let i = 0;i< matriz.length;i++){
//     for(let j=0;j<matriz.length;j++){
//         matriz2[j][matriz.length - i -1] = matriz[i][j];
//         }
// }
// console.log(matriz2);