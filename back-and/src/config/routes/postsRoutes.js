import express from "express"; // Importa o framework Express para construir a API
import multer from "multer"; // Importa o Multer para lidar com dados de formulário multipart (upload de arquivos)
import cors from "cors";
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost } from "../controllers/postsController.js"; // Importa funções para listar posts, criar posts e fazer upload de imagens

const corsOptions = {
    origen: "http://localhost:8000",
    optionsSuccessStatus: 200
}

// Configura as definições de armazenamento do Multer:
const storage = multer.diskStorage({
  destination: function (req, file, cb) { // Define o diretório de upload (substitua pelo caminho desejado)
    cb(null, 'uploads/'); // Define a pasta de destino para arquivos enviados
  },
  filename: function (req, file, cb) { // Gera nomes de arquivo exclusivos para arquivos enviados
    cb(null, file.originalname); // Utiliza o nome original do arquivo por simplicidade
  }
});

const upload = multer({ dest: "./uploads", storage }); // Cria uma instância do Multer com a configuração de armazenamento

// Define as rotas da API usando o Express:
const routes = (app) => {
  // Analisa dados JSON recebidos para análise do corpo da requisição
  app.use(express.json());

  app.use(corsOptions)

  // Obtém todos os posts (substitua pela sua implementação real para listar posts)
  app.get("/posts", listarPosts);

  // Cria um novo post (substitua pela sua implementação real para criar posts)
  app.post("/posts", postarNovoPost);

  // Faz upload de uma imagem para um post
  app.post("/post/upload", upload.single("imagem"), uploadImagem); // Use 'imagem' para o campo do arquivo de imagem

  app.put("/upload/id", atualizarNovoPost)

};

export default routes; // Exporta a função de rotas para uso na sua aplicação principal