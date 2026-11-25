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
    for(let i=0;i<vendas.length;i++){
        vendasColuna.push(vendas[i][coluna]);
    }
    return response.json({
        vendasSemana: vendasColuna
    })

})

server.listen(3000);