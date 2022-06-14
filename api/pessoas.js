const express = require("express");
const router = express.Router();
const { listaBoletos } = require("./listaBoletos");
const listaPessoa = [
    {
        cod: 1,
        nome: "Camilly",
        cpf: "12345678912"
    }
];

function addPessoa(pessoa) {
    pessoa.cod = listaPessoa.length + 1;
    if (pessoa.nome) {
        if (pessoa.cpf) {
            listaPessoa.push(pessoa);
        } else {
            return "Não é possível cadastrar sem o CPF!"
        }
    } else {
        return "Não é possível cadastrar sem o Nome!"
    }
    return pessoa;
};

function buscarPessoa() {
    return listaPessoa;
};

function buscarPessoaIndividual(cod) {
    const pessoa = listaPessoas.find(pessoa => pessoa.cod == cod);
    return pessoa;
};

function editarPessoa(cod, pessoa) {
    const indice = listaPessoa.findIndex(pessoa => pessoa.cod == cod);
    listaPessoa[indice] = pessoa;
    return pessoa;
};

function deletarPessoa(cod) {
    const indice = listaPessoa.findIndex(pessoa => pessoa.cod == cod);
    const boleto = listaBoletos.find(pessoa => pessoa.id_pessoa == cod);
    if (boleto == undefined) {
        listaPessoa.splice(indice, 1);
        return listaPessoa;
    } else {
        return "Não é Possível deletar pessoa"

    }
};

router.get("/", (req, res) => {
    res.json(buscarPessoa());
});

router.get("/:cod", (req, res) => {
    res.json(buscarPessoaIndividual(req.params.cod));
});

router.post("/", (req, res) => {
    res.json(addPessoa(req.body));
});

router.put("/:cod", (req, res) => {
    res.json(editarPessoa(req.params.cod, req.body));
});

router.delete("/:cod", (req, res) => {
    res.json(deletarPessoa(req.params.cod));
});

module.exports = {
    router, buscarPessoa, buscarPessoaIndividual, addPessoa, editarPessoa, deletarPessoa
}
