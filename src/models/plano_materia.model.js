import { DataTypes } from 'sequelize';
import { define } from '../config/database';
import PlanoEstudo, { belongsToMany } from './plano_estudo.model';
import Materia, { belongsToMany as _belongsToMany } from './materia.model';

const PlanoMateria = define('PlanoMateria', {
  fk_id_plano:   { type: DataTypes.INTEGER, primaryKey: true },
  fk_id_materia: { type: DataTypes.INTEGER, primaryKey: true }
}, {
  tableName: 'planos_materias',
  underscored: true,
  timestamps: false
});

belongsToMany(Materia, {
  through: PlanoMateria,
  as: 'materias',
  foreignKey: 'fk_id_plano'
});

_belongsToMany(PlanoEstudo, {
  through: PlanoMateria,
  as: 'planos',
  foreignKey: 'fk_id_materia'
});

export default PlanoMateria;
