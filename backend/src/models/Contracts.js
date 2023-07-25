const { DataTypes } = require("sequelize");
const { connection } = require("./../database/connection");

const Contracts = connection.define(
  "contracts",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    trainee_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    start_validity: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    end_validity: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    remuneration: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    extra: {
      type: DataTypes.FLOAT,
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
    modelName: "Contract",
    tableName: "TrainingContracts", // Nome da tabela correspondente à migration
    timestamps: false, // Se a tabela não tiver os campos createdAt e updatedAt, defina como true.
  }
);

module.exports = Contract;
