const { connection } = require("../database/connection"); //Importando a conexão com o banco de dados
const { STRING, DATE } = require("sequelize"); //Importando os tipos de dados do sequelize
const { Users } = require("./users");
const { UserRole } = require("./UserRole");
const Roles = connection.define(
  "roles",
  {
    //Definindo o modelo da tabela
    description: STRING,
    created_at: DATE,
    updated_at: DATE,
    deleted_at: DATE,
  },
  { underscored: true, paranoid: true }
); //ID é criado automaticamente
Roles.belongsToMany(Users, { through: UserRole });
Users.belongsToMany(Roles, { through: UserRole });

module.exports = { Roles };
