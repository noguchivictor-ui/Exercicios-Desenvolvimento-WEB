const express = require('express');
const server = express();


server.use(express.json());
server.use(express.urlencoded({extended: true}))
server.use(express.static('public'));

server.get('/',(request,response)=>{
    response.sendFile(__dirname + '/public/ex1.html')
})

const vetor =[];

server.post('/cadastrar',(request,response)=>{
    const {nome,email,telefone,area_atuacao,dataInicio,descricao}= request.body;

    vetor.push(nome,email,telefone,area_atuacao,dataInicio,descricao);


    response.json({
        nome: nome,
        email: email,
        telefone: telefone,
        area: area_atuacao,
        data: dataInicio,
        descricao:descricao,
        vetor: vetor.length,
        vetor: vetor
    })
})
server.listen(3000);