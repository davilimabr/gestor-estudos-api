import { DataTypes } from 'sequelize';
import { define } from '../config/database';
import PlanoEstudo, { hasMany } from './plano_estudo.model';
import Materia, { hasMany as _hasMany } from './materia.model';

const SessaoEstudo = define('SessaoEstudo', {
  id:              { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  fk_id_plano:     { type: DataTypes.INTEGER, allowNull: false },
  fk_id_materia:   { type: DataTypes.INTEGER, allowNull: false },
  data:            { type: DataTypes.DATEONLY, allowNull: false },
  duracao_minutos: { type: DataTypes.SMALLINT, allowNull: false }
}, {
  tableName: 'sessoes_estudo',
  underscored: true,
  timestamps: true
});

hasMany(SessaoEstudo, { foreignKey: 'fk_id_plano', as: 'sessoes' });
SessaoEstudo.belongsTo(PlanoEstudo, { foreignKey: 'fk_id_plano', as: 'plano' });

_hasMany(SessaoEstudo, { foreignKey: 'fk_id_materia' });
SessaoEstudo.belongsTo(Materia, { foreignKey: 'fk_id_materia', as: 'materia' });

export default SessaoEstudo;
