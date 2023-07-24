const { connection } = require("../database/connection"); //Importando a conexão com o banco de dados
const { DataTypes } = require("sequelize"); //Importando os tipos de dados do sequelize
const Users = connection.define(
  "users",
  {
    //Definindo o modelo da tabela
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    trainee_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "trainees",
        key: "id",
      },
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: { msg: "Email inválido" },
      },
      unique: { msg: "Email já cadastrado" },
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    //Definindo as configurações da tabela
    tableName: "users",
    paranoid: true, // Soft delete
    underscored: true, // Manter o padrão snake_case
    timestamps: true,
  }
);
module.exports = { Users }; //Exportando o modelo da tabela
