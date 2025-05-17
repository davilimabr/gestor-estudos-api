import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Usuario = sequelize.define('Usuario', {
  id:          { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  login:       { type: DataTypes.STRING(120), allowNull: false, unique: true },
  senha_hash:  { type: DataTypes.STRING(255), allowNull: false },
  tipo:        { type: DataTypes.ENUM('ALUNO', 'ADMIN'), allowNull: false },
  nome:        { type: DataTypes.STRING(120) },
  email:       { type: DataTypes.STRING(180) },
  idade:       { type: DataTypes.SMALLINT },
  telefone:    { type: DataTypes.STRING(25) }
}, {
  tableName: 'usuarios',
  underscored: true,
  timestamps: true
});

export default Usuario;

