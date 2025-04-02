import { MongoClient } from 'mongodb';

export default async function conectarAoBanco(stringConexao) {
  let mongoClient;

  try {
      mongoClient = new MongoClient(stringConexao);
      console.log('Iniciando conexão com o DB...');
      await mongoClient.connect();
      console.log('MongoDB Atlas acessado com sucesso!');

      return mongoClient;
  } catch (erro) {
      console.error('Falha na conexão com o DB!', erro);
      process.exit();
  }
}