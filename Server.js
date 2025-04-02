import express from "express"; // Importa do node_modules dentro de express o sitema 'express'
import conectarAoBanco from "./SRC/Config/dbConfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CON);

// Teste de dados em memoria local, assim não gera a necessidade de complicações
const objetos_Cume_Mock = [
    {
        id: 1,
        descricao: "Um cachorro brincando na grama",
        imagem: "https://place.dog/200/300"
    },
    {
        id: 2,
        descricao: "Uma praia paradisíaca",
        imagem: "https://source.unsplash.com/random/200x300/?beach"
    },
    {
        id: 3,
        descricao: "Uma cidade iluminada à noite",
        imagem: "https://source.unsplash.com/random/200x300/?city,night"
    },
    {
        id: 4,
        descricao: "Uma floresta densa com raios de sol",
        imagem: "https://source.unsplash.com/random/200x300/?forest"
    },
    {
        id: 5,
        descricao: "Um lago tranquilo ao pôr do sol",
        imagem: "https://source.unsplash.com/random/200x300/?lake,sunset"
    },
    {
        id: 6,
        descricao: "Um campo florido durante a primavera",
        imagem: "https://source.unsplash.com/random/200x300/?flowers,field"
    },
    {
        id: 7,
        descricao: "Montanhas cobertas de neve",
        imagem: "https://source.unsplash.com/random/200x300/?mountains,snow"
    },
    {
        id: 8,
        descricao: "Um leão descansando na savana",
        imagem: "https://source.unsplash.com/random/200x300/?lion,safari"
    },
    {
        id: 9,
        descricao: "Um deserto com dunas ao pôr do sol",
        imagem: "https://source.unsplash.com/random/200x300/?desert,sunset"
    },
    {
        id: 10,
        descricao: "Uma cachoeira em uma floresta tropical",
        imagem: "https://source.unsplash.com/random/200x300/?waterfall,jungle"
    },
    {
        id: 11,
        descricao: "Um céu estrelado em uma noite clara",
        imagem: "https://source.unsplash.com/random/200x300/?stars,night"
    },
    {
        id: 12,
        descricao: "Um balão de ar quente sobrevoando colinas",
        imagem: "https://source.unsplash.com/random/200x300/?hotairballoon,hills"
    },
    {
        id: 13,
        descricao: "Pinguins em um bloco de gelo",
        imagem: "https://source.unsplash.com/random/200x300/?penguins,ice"
    },
    {
        id: 14,
        descricao: "Um farol à beira de um penhasco",
        imagem: "https://source.unsplash.com/random/200x300/?lighthouse,cliff"
    },
    {
        id: 15,
        descricao: "Cavalos correndo em um campo aberto",
        imagem: "https://source.unsplash.com/random/200x300/?horses,field"
    },
    {
        id: 16,
        descricao: "Peixes coloridos em um recife de coral",
        imagem: "https://source.unsplash.com/random/200x300/?fish,coral"
    },
    {
        id: 17,
        descricao: "Um vulcão ativo com lava fluindo",
        imagem: "https://source.unsplash.com/random/200x300/?volcano,lava"
    },
    {
        id: 18,
        descricao: "Um barco à vela em um lago tranquilo",
        imagem: "https://source.unsplash.com/random/200x300/?sailboat,lake"
    },
    {
        id: 19,
        descricao: "Um panda comendo bambu",
        imagem: "https://source.unsplash.com/random/200x300/?panda,bamboo"
    },
    {
        id: 20,
        descricao: "Um arco-íris após a chuva",
        imagem: "https://source.unsplash.com/random/200x300/?rainbow,sky"
    }
];


const app = express(); // inicializa a função express(coneção e criação de server) dentro da contante app

app.use(express.json());    

//Abre esse servidor, permitindo-o ouvir(listen) tudo que vier na porta 3000 e retornando o console.log para mostrar a veracidade
app.listen(3000, 
    () => {console.log("Hello Word!!\nServer Ouvindo.....")
});

async function PopularDaDB() {
    const db = conexao.db("OsCumes_Dados")
    const colect = db.collection("mountains")
    return colect.find().toArray()
}

//gera uma resposta aqueles que se conectam, pegando pelo caminho /Cumes
app.get("/Cumes", async (req, res) => {
    const populararray = await PopularDaDB()
    res.status(200).json(populararray)//send("Conectado com sucesso ao Sistem:<br>OsCumeInteressam") agora ele convertre o array em um json e mostra
});

// function RetornaCumeExpecificp(id){
//     return objetos_Cume_Mock.findIndex((objt_cume) => {
//         return objt_cume.id === Number(id)
//     })
// }

// app.get("/Cumes/:id", (req, res) =>{
//     const index = RetornaCumeExpecificp(req.params.id);
//     res.json(objetos_Cume_Mock[index]);
// });


