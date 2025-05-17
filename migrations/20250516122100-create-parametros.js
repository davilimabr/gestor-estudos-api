'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('parametros', {
      chave:      { type: Sequelize.STRING(100), primaryKey: true },
      valor:      { type: Sequelize.STRING(255), allowNull: false },
      descricao:  { type: Sequelize.STRING(255) },
      created_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
      updated_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
    });
  },
  async down (queryInterface) { await queryInterface.dropTable('parametros'); }
};
