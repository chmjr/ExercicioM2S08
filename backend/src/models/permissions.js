const { connection } = require("../database/connection");
const { DataTypes } = require("sequelize");
const { Roles } = require("./roles");
const { PermissionRole } = require("./PermissionRole");
const Permissions = connection.define(
  "permissions",
  {
    description: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    deleted_at: DataTypes.DATE,
  },
  {
    tableName: "permissions",
    underscored: true,
    paranoid: true,
  }
);

Permissions.belongsToMany(Roles, { through: PermissionRole });
Roles.belongsToMany(Permissions, { through: PermissionRole });
PermissionRole.hasMany(Permissions, { foreignKey: "id" });

module.exports = { Permissions };
