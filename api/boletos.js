const express = require("express");
const router = express.Router();
const { listaBoletos } = require("./listaBoletos");

function addboleto(boleto) {
    boleto.cod = listaBoletos.length + 1;
    if (boleto.id_pessoa) {
        if (boleto.id_usuario) {
            if (boleto.valor <= 0) {
                listaBoletos.push(boleto);
            } else {
                return "Não é possível criar com o valor igual ou menor que zero!"
            }
        } else {
            return "Não é possível criar sem um Usuário!"
        }
    } else {
        return "Não é possível criar sem uma pessoa!"
    }
    return boleto;
}

function getBoleto() {
    return listaBoletos;
}

function getBoletoId(cod) {
    const boleto = listaBoletos.find(boleto => boleto.cod == cod);
    return boleto;
}

function getBoletoPessoa(id_pessoa) {
    const boleto = listaBoletos.find(boleto => boleto.id_pessoa == id_pessoa);
    if (boleto == undefined) {
        return "Não tem boletos no nome dessa Pessoa"
    } else {
        return boleto;
    }
}

function editarboleto(cod, boleto) {
    const indice = listaBoletos.findIndex(boleto => boleto.cod == cod);
    listaBoletos[indice] = boleto;
    return boleto;
}

router.get("/", (req, res) => {
    res.json(getBoleto());
});

router.get("/buscarID/:cod", (req, res) => {
    res.json(getBoletoId(req.params.cod));
});

router.get("/buscarPessoa/:cod", (req, res) => {
    res.json(getBoletoPessoa(req.params.cod));
});

router.post("/", (req, res) => {
    res.json(addboleto(req.body));
});

router.put("/:cod", (req, res) => {
    res.json(editarboleto(req.params.cod, req.body));
});

module.exports = {
    router, getBoleto, getBoletoId, getBoletoPessoa, addboleto, editarboleto
}

