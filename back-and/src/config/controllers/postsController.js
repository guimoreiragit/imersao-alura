import fs from "fs"; // Importa o módulo do sistema de arquivos do Node.js
import gerarDescricaoComGemini from "../services/geminiServices.js";
import { getTodosPosts, criarPost, uploadImagem, atualizarPost } from "../models/postModels"; // Importa as funções para interagir com o banco de dados de posts

// Função para listar todos os posts
export async function listarPosts(req, res) {
  try {
    // Obtém todos os posts do banco de dados
    const posts = await getTodosPosts();
    // Envia os posts como uma resposta JSON com status 200 (OK)
    res.status(200).json(posts);
  } catch (error) {
    // Trata erros durante a recuperação dos posts
    console.error(error.message);
    res.status(500).json({ error: "Falha ao buscar os posts" });
  }
}

// Função para criar um novo post
export async function postarNovoPost(req, res) {
  const novoPost = req.body; // Obtém os dados do novo post do corpo da requisição

  try {
    // Cria um novo post no banco de dados
    const postCriado = await criarPost(novoPost);
    // Envia o post criado como uma resposta JSON com status 200 (OK)
    res.status(200).json(postCriado);
  } catch (error) {
    // Trata erros durante a criação do post
    console.error(error.message);
    res.status(500).json({ error: "Falha ao criar o post" });
  }
}

// Função para fazer upload de uma imagem para um post
export async function uploadImagem(req, res) {
  const novoPost = {
    descrição: "", // Assume que a descrição não é fornecida no corpo da requisição
    imageURL: req.file.originalname, // Utiliza o nome original do arquivo como URL da imagem
    alt: "" // Assume que o texto alternativo não é fornecido no corpo da requisição
  };

  try {
    // Cria um novo post no banco de dados
    const postCriado = await criarPost(novoPost);
    // Renomeia o arquivo enviado para corresponder ao ID do post
    const imagemAtualizada = `uploads/${postCriado.insertedId}.png`;
    fs.renameSync(req.file.path, imagemAtualizada);
    // Envia o post criado como uma resposta JSON com status 200 (OK)
    res.status(200).json(postCriado);
  } catch (error) {
    // Trata erros durante o upload da imagem e a criação do post
    console.error(error.message);
    res.status(500).json({ error: "Falha ao fazer upload da imagem ou criar o post" });
  }
}

export async function atualizarNovoPost(novoPost) {
  const idPost = req.params.id;
  const urlimage = `http://localhost:3000${id}.png`
  const post = {
    urlimage,
    descricao: req.body.descricao,
    alt: req.body.alt
  }
  try{
    const imgBuffer = fs.readFileSync(`uploads/${id}.png`)
    const descricao = await gerarDescricaoComGemini(imgBuffer)
    const post = {
      urlimage,
      descricao: descricao,
      alt: req.body.alt
    }
    const postCriado = await atualizarPost(id, post)
    res.status(200).json(postCriado);
  } catch{
    console.error(error.message);
    res.status(500).json({ error: "Falha ao fazer upload da imagem ou criar o post" });
  }
  
}