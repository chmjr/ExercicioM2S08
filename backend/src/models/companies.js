const { connection } = require("../database/connection"); // Importando a conexão com o banco de dados
const { DataTypes } = require("sequelize"); // Importando os tipos de dados do Sequelize

const Companies = connection.define(
  "companies",
  {
    // Definindo o modelo da tabela
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cnpj: {
      type: DataTypes.STRING,
    },
    company_name: {
      type: DataTypes.STRING,
    },
    contact: {
      type: DataTypes.STRING,
    },
    cep: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    neighborhood: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    state: {
      type: DataTypes.STRING,
    },
    number: {
      type: DataTypes.STRING,
    },
    complement: {
      type: DataTypes.STRING,
    },
    rh_analyst_name: {
      type: DataTypes.STRING,
    },
    supervisor_name: {
      type: DataTypes.STRING,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "companies", // Nome da tabela no banco de dados
    underscored: true, // Manter o padrão snake_case
    paranoid: true, // Soft delete
  }
);

module.exports = { Companies };
