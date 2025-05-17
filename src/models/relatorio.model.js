import { DataTypes } from 'sequelize';
import { define } from '../config/database';
import PlanoEstudo, { hasMany } from './plano_estudo.model';

const Relatorio = define('Relatorio', {
  id:            { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  fk_id_plano:   { type: DataTypes.INTEGER, allowNull: false },
  tipo:          { type: DataTypes.STRING(60), allowNull: false },
  conteudo:      { type: DataTypes.TEXT }
}, {
  tableName: 'relatorios',
  underscored: true,
  timestamps: true
});

hasMany(Relatorio, { foreignKey: 'fk_id_plano', as: 'relatorios' });
Relatorio.belongsTo(PlanoEstudo, { foreignKey: 'fk_id_plano', as: 'plano' });

export default Relatorio;
