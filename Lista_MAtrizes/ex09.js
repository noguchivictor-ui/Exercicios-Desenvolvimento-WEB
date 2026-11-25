const express = require('express');

const server = express();

const vendedores = [
  'Ana',
  'Bruno',
  'Carla',
  'Diego'
];

const vendas = [
  [10, 12, 15, 13], // Ana   (Total: 50)
  [8, 9, 11, 10],   // Bruno (Total: 38)
  [15, 14, 16, 18], // Carla (Total: 63)
  [7, 10, 8, 9]     // Diego (Total: 34)
];

server.get('/vendedores/:indice',(request,response)=>{
    const indice = Number(request.params.indice);

    if(indice < 0 || indice >= vendas.length){
        return response.status(404).json({
            mensagem: 'digite uma opcao valida'
        })
    }
    let soma =0;
    let maior = vendas[indice][0];
    let menor = vendas[indice][0];
    for(let i = 0;i<vendas.length;i++){
        soma += vendas[indice][i];

        if(vendas[indice][i] > maior){
            maior = vendas[indice][i];
        }
        if(vendas[indice][i]< menor){
            menor = vendas[indice][i];
        }
    }
    const media = soma / vendas[indice].length;
    let mensagem = null;
    if(media >= 11){
        mensagem = "META ATINGIDA";
    } else{
        mensagem = "ABAIXO DA META";
    }
    return response.json({
        nome: vendedores[indice],
        vendas: vendas[indice],
        soma: soma ,
        media: media,
        maior: maior,
        menor: menor,
        mensagem: mensagem

    })

})
server.get('/semanas/:coluna',(request,response)=>{
    const coluna = Number(request.params.coluna);

    if(coluna < 0 || coluna >= vendas.length){
        return response.status(404).json({
            mensagem: "digite uma opcao valida"
        })
    }

    const vendasColuna = [];
    let soma = 0;
    let maior = vendas[0][coluna];
    let menor = vendas[0][coluna];
    let quantididadeAcima10 = 0;
    for(let i = 0;i<vendas.length;i++){
        vendasColuna.push(vendas[i][coluna])
        soma += vendas[i][coluna];
        if(vendas[i][coluna]>maior){
            maior = vendas[i][coluna];
        }
        if(vendas[i][coluna] < menor){
            menor = vendas[i][coluna];
        }
        if(vendas[i][coluna] > 10){
            quantididadeAcima10++;
        }
    }
    const media = soma / vendasColuna.length;

    return response.json({
        coluna: coluna,
        vendas: vendasColuna,
        soma: soma,
        media: media,
        maior: maior,
        menor: menor,
        quantididadeAcima10: quantididadeAcima10,
        
    })

})
server.listen(3000);