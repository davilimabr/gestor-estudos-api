'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('sessoes_estudo', {
      id:              { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      fk_id_plano:     { type: Sequelize.INTEGER, allowNull: false,
                         references: { model: 'planos_estudo', key: 'id' },
                         onDelete: 'CASCADE', onUpdate: 'CASCADE' },
      fk_id_materia:   { type: Sequelize.INTEGER, allowNull: false,
                         references: { model: 'materias', key: 'id' },
                         onDelete: 'CASCADE', onUpdate: 'CASCADE' },
      data:            { type: Sequelize.DATEONLY, allowNull: false },
      duracao_minutos: { type: Sequelize.SMALLINT, allowNull: false },
      created_at:      { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.fn('NOW') },
      updated_at:      { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.fn('NOW') }
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('sessoes_estudo');
  }
};
