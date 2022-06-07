const express = require("express");
const router = express.Router();
const listaPessoa = [
    {
        cod: 1,
        nome: "Camilly",
        cpf: "12345678912"
    }
];

function addPessoa(pessoa){
    pessoa.cod = listaPessoa.length + 1;
    listaPessoa.push(pessoa);
    return pessoa;
};

function buscarPessoa(){
    return listaPessoa;   
};

function buscarPessoaIndividual(cod){
    const pessoa = listaPessoas.find(pessoa => pessoa.cod == cod);
    return pessoa;
};

function editarPessoa(cod, pessoa){
    const indice = listaPessoa.findIndex(pessoa => pessoa.cod == cod);
    listaPessoa[indice] = pessoa;
    return pessoa;
};

function deletarPessoa(cod) {
    const indice = listaPessoa.findIndex(pessoa => pessoa.cod == cod);
    listaPessoa.splice(indice, 1);
    return listaPessoa;
};

router.get("/", (req, res) => {
    res.json(buscarPessoa());
});

router.get("/:cod", (req, res) => {
    res.json(buscarPessoaIndividual(cod));
});

router.post("/:cod", (req, res) => {
    res.json(addPessoa(pessoa));
});

router.put("/:cod", (req, res) => {
    res.json(editarPessoa(cod, pessoa));
});

router.delete("/:cod", (req, res) => {
    res.json(deletarPessoa(cod));
});

module.exports = {
    router, buscarPessoa, buscarPessoaIndividual, addPessoa, editarPessoa, deletarPessoa
}
