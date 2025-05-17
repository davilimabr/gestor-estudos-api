'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('usuarios', {
      id:          { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      login:       { type: Sequelize.STRING(120), allowNull: false, unique: true },
      senha_hash:  { type: Sequelize.STRING(255), allowNull: false },
      tipo:        { type: Sequelize.ENUM('ALUNO', 'ADMIN'), allowNull: false },
      nome:        { type: Sequelize.STRING(120) },
      email:       { type: Sequelize.STRING(180) },
      idade:       { type: Sequelize.SMALLINT },
      telefone:    { type: Sequelize.STRING(25) },
      created_at:  { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.fn('NOW') },
      updated_at:  { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.fn('NOW') }
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('usuarios');
  }
};
