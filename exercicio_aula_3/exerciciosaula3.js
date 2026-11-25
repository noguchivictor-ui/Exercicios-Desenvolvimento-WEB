//EXERCICIO 1
const numeros = [1, 3, 4, 5, 0, -1, -2, -3];
let total_positivo = 0;
let total_negativo = 0;
let total_zero = 0;
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 0) {
        total_positivo++;
    } else if (numeros[i] < 0) {
        total_negativo++;
    } else {
        total_zero++;
    }
}    
console.log(`Total de números positivos: ${total_positivo}`);
console.log(`Total de números negativos: ${total_negativo}`);
console.log(`Total de zeros: ${total_zero}`);
        
//EXERCICIO 2
const notas = [7, 8, 9, 10, 6, 5, 4, 3, 2, 1];
let soma = 0;
let n_acima_media = 0;
let n_abaixo_media = 0;
let maior_nota = notas[0];
let menor_nota = notas[0];
for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}
const media = soma / notas.length;
for (let i = 0; i < notas.length; i++) {
    if (notas[i] > media) {
        n_acima_media++;
    } else if (notas[i] < media) {
        n_abaixo_media++;
    }
    if (notas[i] > maior_nota) {
        maior_nota = notas[i];
    }
    if (notas[i] < menor_nota) {
        menor_nota = notas[i];
    }
}
console.log(`Média das notas: ${media}`);
console.log(`Número de notas acima da média: ${n_acima_media}`);
console.log(`Número de notas abaixo da média: ${n_abaixo_media}`);
console.log(`Maior nota: ${maior_nota}`);
console.log(`Menor nota: ${menor_nota}`);

//EXERCICIO 3
const prompt = require('prompt-sync')(); // Importação do prompt para Node.js


const produtos = ["Arroz", "Feijão", "Macarrão", "Açúcar", "Sal"];
console.log("Lista de produtos disponíveis: Arroz, Feijão, Macarrão, Açúcar, Sal");
const escolha = prompt("Escolha um produto da lista: ");
let position = -1;
for (let i = 0; i < produtos.length; i++) {
    if (escolha.toLowerCase() === produtos[i].toLowerCase()) {
        position = i;
        break;
    }
}  
if (position !== -1) {
    console.log(`O produto ${escolha} está na posição ${position} da lista.`);
} else {
    console.log(`O produto ${escolha} não está na lista.`);
}
// EXERCICIO 4
const numeros = [1, 2, 3, 4, 5, 2, 11, 23, 1, 76];
numeros.sort((a, b) => a - b);
console.log("Números ordenados em ordem crescente:", numeros);
numeros.reverse();
console.log("Números ordenados em ordem decrescente:", numeros);

// EXERCICIO 5
const numeros = [1, 2, 3, 4, 5];
function dobroArray(numeros) {
    for (let i = 0; i < numeros.length; i++) {
        numeros[i] *= 2;
    }
    return numeros;
}
console.log(numeros);
console.log(dobroArray(numeros));

// EXERCICIO 6
const dezNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let pares = 0;
let impares = 0;
let somaPares = 0;
let somaImpares = 0;
for (let i = 0; i < dezNumeros.length; i++) {
    if (dezNumeros[i] % 2 === 0) {
        pares++;
        somaPares += dezNumeros[i];
    } else {
        impares++;
        somaImpares += dezNumeros[i];
    }
}
console.log(`Total de números pares: ${pares}`);
console.log(`Soma dos números pares: ${somaPares}`);
console.log(`Total de números ímpares: ${impares}`);
console.log(`Soma dos números ímpares: ${somaImpares}`);

// EXERCICIO 7
const temperaturas = [22, 25, 28, 30, 27, 24, 26];
let dias_acima_media = 0;
let maior_temperatura = temperaturas[0];
let menor_temperatura = temperaturas[0];
let soma_temperaturas = 0;
for (let i = 0; i < temperaturas.length; i++) {
    soma_temperaturas += temperaturas[i];
    if (temperaturas[i] > maior_temperatura) {
        maior_temperatura = temperaturas[i];
    } else if (temperaturas[i] < menor_temperatura) {
        menor_temperatura = temperaturas[i];
    }
}
const media_temperaturas = soma_temperaturas / temperaturas.length;
for (let i = 0; i < temperaturas.length; i++) {
    if (temperaturas[i] > media_temperaturas) {
        dias_acima_media++;
    }
}     
console.log(`Média das temperaturas: ${media_temperaturas}`);
console.log(`Maior temperatura: ${maior_temperatura}`);
console.log(`Menor temperatura: ${menor_temperatura}`);
console.log(`Dias com temperatura acima da média: ${dias_acima_media}`);

// EXERCICIO 8
const numeros = [1, 2, 3, 4, 5, -1, -2, -3, -4, -5];
const numeros_positivos = numeros.filter(num => num > 0);
console.log("Números positivos:", numeros_positivos);

// EXERCICIO 9
const prompt = require('prompt-sync')();
const lista_aleatoria = [2, 5, 1, 8, 2, 7, 4, 6];
const numero_escolhido = prompt("DIgite um número : ");
for(let i = 0;i < lista_aleatoria.length; i++ ){
    if (numero_escolhido == lista_aleatoria[i]) {
        console.log(`valor encontrado na posicao: ${i}`);
    }
}
// EXERCICIO 10
const numeros = [1, ,4, 5, 5, 4, 7];
const novo_numeros = [10, 11, 12, 13];

// EXERCICIO 11
