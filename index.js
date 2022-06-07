const express = require("express");
const boletos = require("./api/boletos");
const pessoas = require("./api/pessoas");
const usuarios = require("./api/usuarios");
const app = express();
const port = 3000;

app.use(express.json());
app.use("/api/boletos", boletos.router);
app.use("/api/pessoas", pessoas.router);
app.use("/api/usuarios", usuarios.router);

app.listen(port, () => {
    console.log("Funcionou");
});

app.get("/", (req, res) => {
    res.send("<h1>Servidor Boleto</h1>")
});

