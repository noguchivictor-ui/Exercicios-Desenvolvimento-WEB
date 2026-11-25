//1
const numeros = [1, 2, -3, 4, 6, -7,5,4]
let positivos = 0;
let negativos = 0;
let zeros = 0;
for(let i = 0; i < numeros.length; i++){
    if( numeros[i] > 0){
        positivos++;
    } else if(numeros[i] == 0){
        zeros++;
    } else if(numeros[i] < 0){
        negativos++;
    }
}
console.log('Positivos:', positivos);
console.log('Negativos:', negativos);
console.log('Zeros:', zeros);

//2
const notas = [5,6,7,8,6,5,6,7,8,];
let soma  = 0;
for(let i = 0; i < notas.length; i++){
    soma += notas[i];
}
let media = soma/notas.length;
let nota_acima = 0;
let nota_abaixo = 0;
let maior_nota = notas[0];
let menor_nota = notas[0];
for(let i = 0; i < notas.length;i++){
    if(notas[i] > media){
        nota_acima++;
    } else if(notas[i] < media){
        nota_abaixo++;
    } 
    if(maior_nota < notas[i]){
        maior_nota = notas[i];
    } else if(menor_nota > notas[i])
        menor_nota = notas[i];
}
console.log('notas acima da media', nota_acima);
console.log('notas abaixo da media', nota_abaixo);
console.log('maior nota:',maior_nota);
console.log('menor nota', menor_nota);

//3
const prompt = require('prompt-sync')();

const produtos = ["Feijao", "Arroz", "Batata", "Maca","Banana"];
const escolha = prompt('Escolha um item:');
let posicao = -1;
for(let i = 0; i < produtos.length; i++){
    if(escolha.toLowerCase() === produtos[i].toLowerCase()){
        posicao = i;
        break   
    }
}
if(posicao !== -1){
    console.log('O produto foi encontrado na posicao', posicao);
} else{
    console.log('produto nao encontrado!!');
}

//4
const numeros = [1,2,3,4,5,6,7,8,9,0];
for(let i = 0; i < numeros.length; i++){
    console.log(numeros[i]);
}
for(let i = numeros.length; i>=0; i--){
    console.log(numeros[i]);
}

//5
const numeros = [1,2,3,4,5];
const numeros_dobrados = [];
for(let i= 0; i < numeros.length;i++){
    numeros_dobrados[i] = numeros[i] * 2;
}
for(let i= 0; i < numeros.length;i++){
   console.log(numeros[i]);
}
for(let i= 0; i < numeros.length;i++){
   console.log(numeros_dobrados[i]);
}

//6
const temp = [23,24,25,27,30,34,21];
let soma = 0;
let maior_temp = temp[0];
let menor_temp = temp[0];
for(let i = 0;i < temp.length; i++){
    soma += temp[i];
    if(temp[i] > maior_temp){
        maior_temp = temp[i];
    } else if(temp[i] < menor_temp){
        menor_temp = temp[i];
    }
}
let dias_acima_media = 0;
const media = soma / temp.length;
for(let i = 0;i < temp.length;i++){
    if(temp[i] > media){
        dias_acima_media++;
    }
}
console.log('MEdia de temperatura', media,'graus');
console.log('maior temperatura', maior_temp);
console.log('Menor temperatura', menor_temp);
console.log('dias acima da media', dias_acima_media);

//7
const numeros = [1,2,3,4,5,6,7,8,9,0];
let pares = 0;
let impares = 0;
let soma_par = 0;
let soma_impar= 0;
for(let i = 0; i < numeros.length; i++){
    if(numeros[i] % 2 == 0){
        pares++;
        soma_par += numeros[i];
    } else {
        impares++;
        soma_impar += numeros[i];
    }
}
console.log('numeros pares',pares,'soma:', soma_par);
console.log('numeros impares:', impares,'soma:', soma_impar);

//8
const numeros = [1,2,-9,4,-8,6];
const valores_positivos = [];
for(let i=0;i<numeros.length;i++){
    if(numeros[i] > 0){
        valores_positivos[i] = numeros[i];
    }
}
console.log('liata original;', numeros);
console.log('lista de valors positivos:', valores_positivos);

//9
const prompt = require('prompt-sync')();
const numeros = [1,7,4,7,3,5];
const escolha = prompt('digite um valor:');
let posicao = [];
for(let i = 0; i < numeros.length;i++){
    if(numeros[i] == escolha){
        posicao.push(i);
    }
}
if(posicao !== -1){
    console.log('valor encontrado na posicao', posicao);

} else{
    console.log('valor nao encontrado');
}

//10
const numeros = [1,2,3,4,5,6,7,8,8,9];
const sem_repeticao = [];
for(let i=0;i<numeros.length;i++){

}
//11
const lista1 = [1,2,3,4,5,9];
const lista2 = [4,3,2,1,7];
let resultado = [];
for(let i=0;i<lista1.length;i++){
    resultado.push(i);
}
for(let i=0;i<lista2.length;i++){
    resultado.push(i);
}
console.log(resultado);

//12
const lista1 = [1,2,3,4,5];
const lista2 = [7,5,4,4,5];
let mesmo_valor = 0;
const indice = [];
for(let i = 0;i<lista1.length;i++){
    if(lista1[i]===lista2[i]){
        mesmo_valor++;
        indice.push(i);
    }
}
console.log('quant de vaalores iguais:',mesmo_valor,'indices de suas poosicoes',indice);
//13
const numeros = [1,23,4,5,6,7];
let maior_valor = 0;
let  menor_valor = 0;
for(let i=0;i<numeros.length;i++){
    if(numeros[i]>numeros[maior_valor]){
        maior_valor = i;
    } else if(numeros[i]<numeros[menor_valor]){
        menor_valor = i;
    }
}
const auxiliar = numeros[maior_valor];
numeros[maior_valor] = numeros[menor_valor];
numeros[menor_valor] = auxiliar;

console.log(numeros);

//14
const numeros= [1,2,3,4,5,6];
const novo = [];
for (let i = 0;i<numeros.length;i++){
    if(numeros[i] !== 0){
        novo.push(numeros);
    }
}
console.log(novo);


//15
numeros = [1,23,4,5,6,8];
let maior_num = 0;
let segundo_mair_num = 0;
for(let i = 0;i<numeros.length;i++){
    if(numeros[i] > maior_num){
        maior_num = numeros[i];
    } else if (numeros[i] > segundo_mair_num && segundo_mair_num < maior_num){
            segundo_mair_num = numeros[i];    
    }
}
if(maior_num !== segundo_mair_num){
    console.log('maior valor :', maior_num);
    console.log('seu=gundo maior valor', segundo_mair_num);
  }

//16
const numeros = [1,2,3,4,5,4,7];
let sequebcia_atual = 1;
let maior_sequencia = 1;
for(let i = 0;i< numeros.length; i++){
    if(numeros[i] === numeros[i - 1]+ 1){
        sequebcia_atual++;
    } else {
        sequebcia_atual = 1;
    }
    if(sequebcia_atual > maior_sequencia){
        maior_sequencia = sequebcia_atual;
    }
}
console.log('a maior sequencia presente na lista e',maior_sequencia);

//17
const numeros = [1,2,3,4,5,6];
let k = 2;
const resultado = new Array(numeros.length);
for(let i = 0; i < numeros.length;i++){
    const nova_posicao = new Array(numeros.length);
    resultado(nova_posicao) =numeros[i];
}
console.log('novo array', resultado);

//18
const numeros = [1,2,3,4,5,6,7];
let valor_alvo = 3;
const pares = [];
for(let i = 0;i<numeros.length;i++){
    for(let j = i + 1;j<numeros.length;j++){
        if(numeros[i] + numeros[j] === valor_alvo){
            pares.push([numeros[i], numeros[j]]);
        }
    }
}
if (pares.length > 0){
    for(let i = 0;i<pares.length;i++){
        console.log(pares[i][0],'+',pares[i][1],'=', valor_alvo);
    }
} else{
    console.log("erro");
}

//19
const lista1 = [1,2,9,7,8];
const lista2 = [2,6,9,7,7];
const valores_iguais = [];
for(let i=0;i<lista1.length;i++){
   for(let j = 0; j<lista2.length;j++){
        if(lista1[i]=== lista2[j]){
            valores_iguais.push(lista1[i]);
            break;
        }
   }
}
console.log(valores_iguais);
//
const prompt = require('prompt-sync')();
const notas = [];
for(let i = 1;i <= 10;i++){
    let escolha = parseFloat(prompt(`Digite a nota ${i}: `));
    notas.push(escolha);
}
let soma = 0;
let maior_nota = notas[0];
let menor_nota = notas[0];
let nota_acima6 = 0;
const aprovados = [];
for(let i = 0;i<notas.length;i++){
        soma += notas[i];
}
let media = soma / notas.length;
for(let i =0;i<notas.length;i++){
    if(notas[i] > maior_nota){
        maior_nota = notas[i];
    } else if (notas[i] < menor_nota){
        menor_nota = notas[i];
    }
    if(notas[i] >= 6){
        nota_acima6++;
        aprovados.push(notas[i]);
    }
}
console.log('media da turma', media);
console.log('maior nota', maior_nota);
console.log('menor nota', menor_nota);
console.log('notas acima de 6', nota_acima6);