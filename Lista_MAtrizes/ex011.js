const express = require('express');

const server = express();

server.use(express.json());

server.post('/livros',(request,response)=>{
    const titulo = request.body.titulo;
    const ano = request.body.ano;

    return response.json({
        titulo: titulo,
        ano: ano
    })
})