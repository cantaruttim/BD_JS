const express = require('express');
const app = express();
const User = require('./models/User');
const Project = require('./models/Project');

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

app.post("/projects", async (req_project, res_project) => { // rota do tipo post
    //console.log(req_project.body);

    await Project.create(req_project.body)
    .then( () => {
        return res_project.json({
            erro: false,
            mensagem: "Projeto cadastrado com sucesso!"
        });
    }).catch( () => {
        return res_project.status(400).json({
            erro: true,
            mensagem: "Erro: Projeto não cadastrado com sucesso!"
        });
    });

});



app.listen(8080, () => {
    console.log("Servido iniciado na porta 8080: http://localhost:8080");
});