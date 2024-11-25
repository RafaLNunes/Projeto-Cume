import express from "express"; // Importa do node_modules dentro de express o sitema 'express'

const app = express(); // inicializa a função express(coneção e criação de server) dentro da contante app


//Abre esse servidor, permitindo-o ouvir(listen) tudo que vier na porta 3000 e retornando o console.log para mostrar a veracidade
app.listen(3000, 
    () => {console.log("Hello Word!!\nServer Ouvindo.....")
});
//gera uma resposta aqueles que se conectam, pegando pelo caminho /Cume
app.get("/Cume", (req, res)=>{
    res.status(200).send("Conectado com sucesso ao Sistem:<br>OsCumeInteressam")
});