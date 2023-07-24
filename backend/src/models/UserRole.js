const { DataTypes } = require("sequelize");
const { connection } = require("../database/connection"); // Importe a instância do Sequelize

const UserRole = connection.define(
  "users_roles",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    role_id: {
      type: DataTypes.INTEGER,
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
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "users_roles",
    timestamps: false, // Indica que não há colunas de timestamps (created_at, updated_at)
    underscored: true,
    paranoid: true,
  }
);

module.exports = { UserRole };
