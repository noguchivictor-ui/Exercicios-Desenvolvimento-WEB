const express = require('express');

const server = express();

const vetor = ['ok','hi','bruh'];
server.get('/produtos/:indice',(request,response)=>{
    
    const indice = Number(request.params.indice);

    if(indice < 0 || indice >= vetor.length){
        return response.status(404).json({
            mensagem: 'produto nao encontrado'
        })
    }
    return response.json({
        indice: indice,
        produto: vetor[indice]

    })
})
server.listen(3000);