"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      trainee_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "trainees", // Nome da tabela referenciada
          key: "id", // Coluna da tabela referenciada
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      email: Sequelize.STRING,
      password: Sequelize.STRING,
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
      deleted_at: Sequelize.DATE,
     
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("users");
  },
};
