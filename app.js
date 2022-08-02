const express = require('express');
const app = express();
const User = require('./models/User');

app.get("/", async (req, res) => { // tipo get
    res.send("Página Inicial - CRUD com BD do Matheus");
});

app.post("/cadastrar", async (req, res) => { // rota do tipo post
    res.send("Página Cadastrar");
});

app.listen(8080, () => {
    console.log("Servido iniciado na porta 8080: http://localhost:8080");
});