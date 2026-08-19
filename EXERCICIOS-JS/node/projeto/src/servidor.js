const porta = 3003;

const express = require('express');
const app = express();
const bancoDeDados = require('./bancoDeDados');

app.get('/produtos', (req, res, next) => {          // apagando produtos e colocando user, vai passar a responder para qualquer outra requisição
    res.send(bancoDeDados.getProdutos());            // Converter para JSON
});

app.get('/produtos/:id', (req, res, next) => {     
    res.send(bancoDeDados.getProdutos(req.params.id));            
});

app.post('/produtos', (req, res, next) => {     
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    });
    res.send(produto);    // JSON       
});

app.listen(porta, () => {
    console.log(`Servidor esta executando na porta ${porta}.`);
});