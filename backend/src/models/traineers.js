const { connection } = require("../database/connection"); //Importando a conexão com o banco de dados
const { DataTypes } = require("sequelize"); //Importando os tipos de dados do sequelize
const Traineers = connection.define(
  "traineers",
  {
    //Definindo o modelo da tabela
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rg: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        len: {
          args: [7, 20], // Verifica se o campo tem no mínimo 9 caracteres
          msg: "RG deve ter no mínimo 7 caracteres",
        },
      },
    },
    cpf: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    primary_phone_contact: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    secondary_phone_contact: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    date_birth: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    father_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mother_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    have_special_needs: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
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
    tableName: "trainees", // Nome da tabela no banco de dados
    underscored: true, // Manter o padrão snake_case
    paranoid: true, // Não excluir permanentemente
  }
); //ID é criado automaticamente

module.exports = { Traineers };
