const express = require("express");
const router = express.Router();
const { listaBoletos } = require("./listaBoletos")
const listaUsuario = [
    {
        cod: 1,
        nome: "Camilly",
        senha: "123"
    }
];

function addUsuario(usuario) {
    usuario.cod = listaUsuario.length + 1;
    if (usuario.nome) {
        if (usuario.senha) {
            listaUsuario.push(usuario);
        } else {
            return "Não é possível cadastrar sem a senha!"
        }
    } else {
        return "Não é possível cadastrar sem o Nome!"
    }
    return usuario;
}

function buscarUsuario() {
    return listaUsuario;
}

function buscarUsuarioIndividual(cod) {
    const usuario = listaUsuario.findIndex(usuario => usuario.cod == cod);
    return usuario;
}

function editarUsuario(cod, usuario) {
    const indice = listaUsuario.findIndex(usuario => usuario.cod == cod);
    listaUsuario[indice] = usuario;
    return usuario;
}

function deletarUsuario(cod) {
    const indice = listaUsuario.findIndex(usuario => usuario.cod == cod);
    const boleto = listaBoletos.find(usuario => usuario.id_usuario == cod);
    if (boleto == undefined) {
        listaUsuario.splice(indice, 1);
        return listaUsuario;
    } else {
        return "Não é Possível deletar Usuário"
    }
}

router.get("/", (req, res) => {
    res.json(buscarUsuario());
});

router.get("/:cod", (req, res) => {
    res.json(buscarUsuarioIndividual(req.params.cod));
});

router.post("/", (req, res) => {
    res.json(addUsuario(req.body));
});

router.put("/:cod", (req, res) => {
    res.json(editarUsuario(req.params.cod, req.body));
});

router.delete("/:cod", (req, res) => {
    res.json(deletarUsuario(req.params.cod));
});

module.exports = {
    router, buscarUsuario, buscarUsuarioIndividual, addUsuario, editarUsuario, deletarUsuario
}