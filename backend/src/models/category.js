const { connection } = require("../database/connection"); //Importando a conexão com o banco de dados
const { STRING, DATE } = require("sequelize"); //Importando os tipos de dados do sequelize
const Category = connection.define(
  "category",
  {
    //Definindo o modelo da tabela
    name: STRING,
    createdAt: DATE,
    updatedAt: DATE,
    deletedAt: DATE,
  },
  { underscored: true, paranoid: true }
); //ID é criado automaticamente

module.exports = { Category };
