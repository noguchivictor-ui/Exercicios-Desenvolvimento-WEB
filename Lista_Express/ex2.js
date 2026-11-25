const express = require('express');

const server = express();

const vetor = ['ok','hi','bruh'];

server.get('/eventos',(request,response)=>{
    return response.json({
        vetor: vetor,
        quant: vetor.length
    })
})

server.listen(3000);