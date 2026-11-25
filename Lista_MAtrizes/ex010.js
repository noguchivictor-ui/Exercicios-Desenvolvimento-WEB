const express = require('express');

const server = express();

const produtos = [
  'Mouse',
  'Teclado',
  'Monitor',
  'Notebook'
];

const precos = [
  80,
  150,
  900,
  3500
];

server.get('/produtos',(request,response)=>{
    const minimo = Number(request.query.minimo);

    const selecionados = [];
    for(let i=0;i<produtos.length;i++){
        if(precos[i]>= minimo){
            selecionados.push(produtos[i]);
        }
    }
    return response.json({
        produtosConformeMinimo: selecionados
    })
})

server.listen(3000);