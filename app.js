const express = require("express");
const app = express();

// Criação de rotas
// ***************************************
app.get("/", function(req, res) {
    res.sendFile(__dirname+"/html/index.html")
});

app.get("/sobre", function(req, res) {
    res.sendFile(__dirname+"/html/sobre.html");
});

app.get("/blog", function(req, res) {
    res.sendFile(__dirname+"/html/blog.html");
});

app.get("/ola/:cargo/:nome", function(req, res) {
    res.send("<h1>Ola " + req.params['nome'] + "</h1>" +
            "<h2> Seu cargo e: " + req.params['cargo'] + "</h2>");
})
// ***************************************

// Leitura da aplicação na porta e função de callback para monitoramento
app.listen(8080, function() {
    console.log("Servidor rodando em http://localhost:8080/");
});
//Localhost: 8080