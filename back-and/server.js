import express from "express"
import conectarAoBanco from ".src/config/dbConfig.js"
import routes from "./src/config/routes/postsRoutes";

// Importamos o framework Express para criar o servidor e a função `conectarAoBanco` para estabelecer a conexão com o banco de dados.
// A função `conectarAoBanco` provavelmente se encontra em um arquivo separado (`dbConfig.js`) e é responsável por conectar à base de dados utilizando a string de conexão fornecida.


// method usado abaixo hardedCode usado inicialmente para testar e ver se o servidor funcionava, manter aqui por boas de exemplo.
//const posts = [
//    {id: 1, descricao: "gato no colo",
//    imgURL: "https://placecats.com/mille/300/150"
//    },
//    
//    {id: 2, descricao: "gato fazendo ronron",
//        imgURL: "https://placecats.com/mille/300/150"
//    },

//    {id: 3, descricao: "gato a mimir",
//        imgURL: "https://placecats.com/mille/300/150"
//    }
//]

// Aqui definimos um array de objetos que representam os posts. 

const app = express();
app.use(express.static("uploads"))
routes(app);


// Criamos uma instância do Express, que será o núcleo da nossa aplicação.
// O middleware `express.json()` permite que a aplicação receba dados no formato JSON em requisições HTTP.

//inicia o servidor na porta 3000
app.listen(3000,() => {
    console.log("servidor ouvindo...");
});





// Define uma rota GET para o caminho "/posts". 
// Quando uma requisição GET for feita para esse caminho, a função fornecida será executada.
// A função busca todos os posts do banco de dados e envia uma resposta HTTP com status 200 (sucesso) e os posts em formato JSON.

//function postsId(id){
//    return posts.findIndex((post)=> {
//        return post.id === Number(id)
//    })
//}

//app.get("/posts/:id", (req, res ) => {
//    const index = postsId(req.params.id)
//    res .status(200).json(posts [index]);
//});