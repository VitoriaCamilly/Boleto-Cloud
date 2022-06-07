const express = require("express");
const router = express.Router();
const listaUsuario = [
    {
        cod: 1,
        nome: "Camilly",
        senha: "123"
    }
];

function addUsuario(usuario){
    usuario.cod = listaUsuario.length + 1;
    listaUsuario.push(usuario);
    return usuario;
}

function buscarUsuario(){
    return listaUsuario;   
}

function buscarUsuarioIndividual(cod){
    const usuario = listaUsuario.findIndex(usuario => usuario.cod == cod);
    return usuario;
}

function editarUsuario(cod, usuario){
    const indice = listaUsuario.findIndex(usuario => usuario.cod == cod);
    listaUsuario[indice] = usuario;
    return usuario;
}

function deletarUsuario(cod) {
    const indice = listaUsuario.findIndex(usuario => usuario.cod == cod);
    listaUsuario.splice(indice, 1);
    return listaUsuario;
}

router.get("/", (req, res) => {
    res.json(buscarUsuario());
});

router.get("/:cod", (req, res) => {
    res.json(buscarUsuarioIndividual(cod));
});

router.post("/:cod", (req, res) => {
    res.json(addUsuario(usuario));
});

router.put("/:cod", (req, res) => {
    res.json(editarUsuario(cod, usuario));
});

router.delete("/:cod", (req, res) => {
    res.json(deletarUsuario(cod));
});

module.exports = {
    router, buscarUsuario, buscarUsuarioIndividual, addUsuario, editarUsuario, deletarUsuario
}