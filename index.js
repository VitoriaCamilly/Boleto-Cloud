const express = require("express");
// const api = require("./api");
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log("Funcionou");
});

app.get("/", (req, res) => {
    res.send("<h1>Servidor Boleto</h1>")
});