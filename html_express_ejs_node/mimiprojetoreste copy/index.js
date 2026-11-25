const express = require('express');
const server = express();

server.use(express.static('public'));
server.use(express.urlencoded({extended: true}));

server.set('view engine','ejs');

const alunos = [{id: 1},{id: 2},{id:4}]

server.get('/alunos/:id',(request,response)=>{
    const id = request.params.id;



    response.render('resposta',{
        id: id
    });
})



server.listen(3000);