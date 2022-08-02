const express = require('express');
const app = express();

app.get("/", async (req, res) => {
    res.send("Página Inicial - CRUD com BD do Matheus");
});

app.listen(8080, () => {
    console.log("Servido iniciado na porta 8080: http://localhost:8080");
});