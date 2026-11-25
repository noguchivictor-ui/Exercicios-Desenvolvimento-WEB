const express = require('express');
const server = express();

server.use(express.static('public'));
server.use(express.urlencoded({extended: true}));

server.set('view engine','ejs');

server.get('/',(request,response)=>{
    response.sendFile(__dirname + '/public/ex.html');
})

server.post('/cadastrar',(request,response)=>{
    const {nome,email,telefone,projeto,participante1,participante2,data_inicio,data_fim,arquivo,descricao} = request.body;

    response.render('resposta',{
        nome: nome,
        email: email,
        telefone: telefone,
        projeto: projeto,
        participante1: participante1 || 'nao selecionado',
        participante2: participante2 || 'nao selecionado',
        data_inicio: data_inicio,
        data_fim: data_fim,
        arquivo: arquivo || 'nao selecionado', 
        descricao: descricao
    })
})


server.listen(3000);