const express = require("express"); //Framework para criar o servidor
const cors = require("cors"); //Framework para permitir que o servidor seja acessado por qualquer aplicação
const { connection } = require("./database/connection"); //importando a conexão com o banco de dados
const routes = require("./routes"); //importando as rotas

class Server {
  constructor() {
    this.app = express();
    this.port = 3333;
    this.middlewares();
    this.database();
    this.allRoutes(this.app);
  }
  async middlewares() {
    this.app.use(express.json());
    this.app.use(cors());
  }
  async listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor rodando na porta: ${this.port}`);
    });
  }
  async database() {
    try {
      await connection.authenticate();
      console.log("Conexão com o banco de dados realizada com sucesso!");
    } catch (error) {
      console.log("Erro ao conectar com o banco de dados: ", error);
    }
  }

  async allRoutes(app) {
    app.use(routes);
  }
}

module.exports = Server;
