'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('lembretes', {
      id:             { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      fk_id_usuario:  { type: Sequelize.INTEGER, allowNull: false,
                        references: { model: 'usuarios', key: 'id' },
                        onDelete: 'CASCADE', onUpdate: 'CASCADE' },
      mensagem:       { type: Sequelize.TEXT, allowNull: false },
      data_hora:      { type: Sequelize.DATE, allowNull: false },
      created_at:     { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.fn('NOW') },
      updated_at:     { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.fn('NOW') }
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('lembretes');
  }
};
