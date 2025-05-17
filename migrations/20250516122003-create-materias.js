'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('materias', {
      id:             { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      nome:           { type: Sequelize.STRING(120), allowNull: false, unique: true },
      carga_horaria:  { type: Sequelize.INTEGER },
      created_at:     { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.fn('NOW') },
      updated_at:     { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.fn('NOW') }
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('materias');
  }
};
