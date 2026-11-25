const express = require('express');

const server = express();
const vendas = [[4,5,6,7], // Vendas da Ana (Semana 1, 2, 3 e 4)
    [8,  11, 14, 9 ], // Vendas do Bruno (Semana 1, 2, 3 e 4)
    [20, 18, 22, 25]  // Vendas do Carlos (Semana 1, 2, 3 e 4)
    ];

server.get('/semanas/:coluna',(request,response)=>{
    const coluna = Number(request.params.coluna);

    if(coluna < 0 || coluna > vendas.length){
        return response.status(404).json({
            mensagem: 'semana nao encontrada'
        })
    }

    const vendasColuna = [];
    let soma= 0;
    let media =0;
    let maior=vendas[0][coluna];
    let menor=vendas[0][coluna];
    let acimade10 = 0;
    for(let i=0;i<vendas.length;i++){
        vendasColuna.push(vendas[i][coluna]);
        soma += vendas[i][coluna];
        if(vendas[i][coluna]> maior){
            maior= vendas[i][coluna];
        }else if (vendas[i][coluna]< menor){
            menor = vendas[i][coluna];
        }
        if(vendas[i][coluna]>= 10){
            acimade10++;
        }
    }
    media = soma / 4;
    return response.json({
        vendasSemana: vendasColuna,
        soma: soma,
        media: media,
        maior: maior,
        menor: menor,
        acimade10: acimade10
    })

})

server.listen(3000);