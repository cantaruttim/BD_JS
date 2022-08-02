const express = require('express');
const app = express();
const User = require('./models/User');

app.use(express.json()); // app recebendo dados de forma correta no formato JSON

app.get("/", async (req, res) => { // tipo get
    res.send("Página Inicial - CRUD com BD do Matheus");
});

app.post("/cadastrar", async (req, res) => { // rota do tipo post
    // console.log(req.body);

    await User.create(req.body)
    .then( () => {
        return res.json({
            erro: false,
            mensagem: "Usuário cadastrado com sucesso!"
        });
    }).catch( () => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Usuário não cadastrado com sucesso!"
        });
    });

});


app.listen(8080, () => {
    console.log("Servido iniciado na porta 8080: http://localhost:8080");
});