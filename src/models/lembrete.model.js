import { DataTypes } from 'sequelize';
import { define } from '../config/database';
import Usuario, { hasMany } from './usuario.model';

const Lembrete = define('Lembrete', {
  id:             { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  fk_id_usuario:  { type: DataTypes.INTEGER, allowNull: false },
  mensagem:       { type: DataTypes.TEXT, allowNull: false },
  data_hora:      { type: DataTypes.DATE, allowNull: false }
}, {
  tableName: 'lembretes',
  underscored: true,
  timestamps: true
});

hasMany(Lembrete, { foreignKey: 'fk_id_usuario', as: 'lembretes' });
Lembrete.belongsTo(Usuario, { foreignKey: 'fk_id_usuario', as: 'usuario' });

export default Lembrete;
