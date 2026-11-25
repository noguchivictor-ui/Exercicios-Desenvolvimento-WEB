const express = require('express');

const server = express();

const vendedores = ['vitor','bruno','renato'];
const vendas = [[4,5,6,7], // Vendas da Ana (Semana 1, 2, 3 e 4)
    [8,  11, 14, 9 ], // Vendas do Bruno (Semana 1, 2, 3 e 4)
    [20, 18, 22, 25]  // Vendas do Carlos (Semana 1, 2, 3 e 4)
];

server.get('/vendedores/:indice',(request,response)=>{
    const indice = Number(request.params.indice);

    if(indice < 0 || indice >= vendas.length){
        return response.status(404).json({
            mensagem: 'vendas nao encontradas'
        })
    }
    let soma = 0;
    let media = 0;
    let maior = vendas[indice][0];
    let menor = vendas[indice][0];

    for(let i =0;i < vendas[indice].length;i++){
        soma += vendas[indice][i];
        if(vendas[indice][i] > maior){
            maior = vendas[indice][i];
        }else if(vendas[indice][i] < menor){
            menor = vendas[indice][i];
        }
    }
    media = soma / vendas[indice].length;
    let resposta = null;
    if(media >= 11){
        resposta = 'META ATINGIDA';
    }else{
        resposta = 'ABAIXO DA META'
    }
    return response.json({
        vendedor: vendedores[indice],
        vendas: vendas[indice],
        soma_das_vendas: soma,
        media: media,
        maior: maior,
        menor: menor,
        resposta: resposta
    })
})

server.listen(3000);