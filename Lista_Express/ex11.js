const express = require('express');

const server = express();

const precos = [1000,200,3000];
const produtos = ['arroz','feijao','batata'];
const acima = [];
server.get('/produtos',(request,response)=>{
    const minimo = Number(request.query.minimo);
    for(let i=0;i<precos.length;i++){
        if(precos[i] > minimo){
            acima.push(produtos[i]);
        }
    }
    return response.json({
        produtosAcima: acima
    })

})


server.listen(3000);