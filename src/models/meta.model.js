import { DataTypes } from 'sequelize';
import { define } from '../config/database';
import Usuario, { hasMany } from './usuario.model';

const Meta = define('Meta', {
  id:             { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  fk_id_usuario:  { type: DataTypes.INTEGER, allowNull: false },
  descricao:      { type: DataTypes.TEXT, allowNull: false }
}, {
  tableName: 'metas',
  underscored: true,
  timestamps: true
});

hasMany(Meta, { foreignKey: 'fk_id_usuario', as: 'metas' });
Meta.belongsTo(Usuario, { foreignKey: 'fk_id_usuario', as: 'usuario' });

export default Meta;
