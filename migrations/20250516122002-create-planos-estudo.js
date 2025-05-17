'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('planos_estudo', {
      id:             { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      fk_id_usuario:  { type: Sequelize.INTEGER, allowNull: false,
                        references: { model: 'usuarios', key: 'id' },
                        onDelete: 'CASCADE', onUpdate: 'CASCADE' },
      nome:           { type: Sequelize.STRING(120), allowNull: false },
      data_inicio:    { type: Sequelize.DATEONLY },
      data_fim:       { type: Sequelize.DATEONLY },
      created_at:     { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.fn('NOW') },
      updated_at:     { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.fn('NOW') }
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('planos_estudo');
  }
};
