import { DataTypes } from 'sequelize';
import { define } from '../config/database';

const Materia = define('Materia', {
  id:            { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nome:          { type: DataTypes.STRING(120), allowNull: false, unique: true },
  carga_horaria: { type: DataTypes.INTEGER }
}, {
  tableName: 'materias',
  underscored: true,
  timestamps: true
});

export default Materia;
