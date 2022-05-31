const router = express.Router();
const listaUsuario = [];

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

router.get("/api/Usuario", (req, res) => {
    res.json(buscarUsuario());
});

router.get("/api/Usuario/:cod", (req, res) => {
    res.json(buscarUsuarioIndividual(cod));
});

router.post("/api/Usuario/:cod", (req, res) => {
    res.json(addUsuario(usuario));
});

router.put("/api/Usuario/:cod", (req, res) => {
    res.json(editarUsuario(cod, usuario));
});

router.delete("/api/Usuario/:cod", (req, res) => {
    res.json(deletarUsuario(cod));
});