const express = require("express");
const router = express.Router();
const listaBoletos = [
    {
        cod: 1,
        valor: 20,
        id_usuario: 1,
        id_pessoa: 1,
        status: "Ativo",
        nome_pessoa: "Camilly"
    }
];

module.exports = {
    router, listaBoletos
}
