'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('relatorios', {
      id:            { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      fk_id_plano:   { type: Sequelize.INTEGER, allowNull: false,
                       references: { model: 'planos_estudo', key: 'id' },
                       onDelete: 'CASCADE', onUpdate: 'CASCADE' },
      tipo:          { type: Sequelize.STRING(60), allowNull: false },
      conteudo:      { type: Sequelize.TEXT },
      created_at:    { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.fn('NOW') },
      updated_at:    { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.fn('NOW') }
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('relatorios');
  }
};
