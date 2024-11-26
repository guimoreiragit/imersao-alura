import { ObjectId } from "mongodb";
import 'dotenv/config';
import conectarAoBanco from "../config/dbConfig.js"; // Importa a função para conectar ao banco de dados

// Estabelece a conexão com o banco de dados
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função para obter todos os posts do banco de dados
export async function getTodosPosts() {
  const db = conexao.db("back-end-lura"); // Seleciona o banco de dados
  const colecao = db.collection("posts"); // Seleciona a coleção de posts
  return colecao.find().toArray(); // Busca todos os posts e retorna como um array
}

// Função para criar um novo post no banco de dados
export async function criarPost(novoPost) {
  const db = conexao.db("back-end-lura"); // Seleciona o banco de dados
  const colecao = db.collection("posts"); // Seleciona a coleção de posts
  return colecao.insertOne(novoPost); // Insere o novo post na coleção e retorna o resultado da inserção
}
export async function atualizarPost (id, novoPost) {
  const db = conexao.db("back-end-lura"); // Seleciona o banco de dados
  const colecao = db.collection("posts"); // Seleciona a coleção de posts
  const objID = ObjectId.createFromHexString(id)
  return colecao.updateOne({_id: new ObjectId(objID)}, {$set: novoPost}) // Insere o novo post na coleção e retorna o resultado da inserção
}