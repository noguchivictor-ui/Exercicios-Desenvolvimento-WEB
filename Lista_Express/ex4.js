const express = require('express');

const server = express();

const vendedores = ['vitor','bruno','renato'];
const vendas = [[4,5,6,7], // Vendas da Ana (Semana 1, 2, 3 e 4)
    [8,  11, 14, 9 ], // Vendas do Bruno (Semana 1, 2, 3 e 4)
    [20, 18, 22, 25]  // Vendas do Carlos (Semana 1, 2, 3 e 4)
];

server.get('/vendedores/:indice',(request,response)=>{
    const indice = Number(request.params.indice);

    if(indice < 0 || indice > vendas.length){
        return response.status(404).json({
            mensagem: 'vendas nao encontradas'
        })
    }
    return response.json({
        vendedor: vendedores[indice],
        vendas: vendas[indice]
    })
})

server.listen(3000);