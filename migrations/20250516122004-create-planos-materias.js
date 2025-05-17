'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('planos_materias', {
      fk_id_plano:   { type: Sequelize.INTEGER, primaryKey: true,
                       references: { model: 'planos_estudo', key: 'id' },
                       onDelete: 'CASCADE', onUpdate: 'CASCADE' },
      fk_id_materia: { type: Sequelize.INTEGER, primaryKey: true,
                       references: { model: 'materias', key: 'id' },
                       onDelete: 'CASCADE', onUpdate: 'CASCADE' }
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('planos_materias');
  }
};
