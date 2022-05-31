const router = express.Router();
const listaPessoa = [];

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

router.get("/api/pessoas", (req, res) => {
    res.json(buscarPessoa());
});

router.get("/api/pessoas/:cod", (req, res) => {
    res.json(buscarPessoaIndividual(cod));
});

router.post("/api/pessoas/:cod", (req, res) => {
    res.json(addPessoa(pessoa));
});

router.put("/api/pessoas/:cod", (req, res) => {
    res.json(editarPessoa(cod, pessoa));
});

router.delete("/api/pessoas/:cod", (req, res) => {
    res.json(deletarPessoa(cod));
});

module.exports = {
    
}
