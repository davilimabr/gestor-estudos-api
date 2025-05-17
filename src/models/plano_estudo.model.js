import { DataTypes } from 'sequelize';
import { define } from '../config/database';
import Usuario, { hasMany } from './usuario.model';

const PlanoEstudo = define('PlanoEstudo', {
  id:            { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  fk_id_usuario: { type: DataTypes.INTEGER, allowNull: false },
  nome:          { type: DataTypes.STRING(120), allowNull: false },
  data_inicio:   { type: DataTypes.DATEONLY },
  data_fim:      { type: DataTypes.DATEONLY }
}, {
  tableName: 'planos_estudo',
  underscored: true,
  timestamps: true
});

hasMany(PlanoEstudo, { foreignKey: 'fk_id_usuario', as: 'planos' });
PlanoEstudo.belongsTo(Usuario, { foreignKey: 'fk_id_usuario', as: 'usuario' });

export default PlanoEstudo;
