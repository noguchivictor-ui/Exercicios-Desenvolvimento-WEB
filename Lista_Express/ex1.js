const express = require('express');

const server = express();

server.get('/academia',(request,response) =>{
    return response.json({
        nome: 'bluefit',
        cidade: 'sp'
    })
})

server.listen(3000);