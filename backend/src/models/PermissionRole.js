const { DataTypes } = require("sequelize");
const { connection } = require("../database/connection");

const PermissionRole = connection.define(
  "permissions_roles",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model:{
        tableName: "roles",
      },
      key: "id",
    }},
    permission_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model:{
        tableName: "permissions",
      },
      key: "id",
    }},
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
    tableName: "permissions_roles",
    timestamps: false, // Indica que não há colunas de timestamps (created_at, updated_at)
    underscored: true,
    paranoid: true,
  }
);

module.exports = { PermissionRole };
