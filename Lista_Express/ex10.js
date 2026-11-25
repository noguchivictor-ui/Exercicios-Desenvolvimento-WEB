const express = require('express');

const server = express();

server.get('/teste',(request,response)=>{
    const valor = request.query.valor;

    return response.json({
        valor: valor
    })
})

server.listen(3000);