import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';   // import default

/**
 * Armazena pares chave-valor que controlam
 * o comportamento global do sistema.
 * Ex.: tempo_padrão_lembrete = 30  (minutos)
 */
const Parametro = sequelize.define('Parametro', {
  chave:  { type: DataTypes.STRING(100), primaryKey: true },
  valor:  { type: DataTypes.STRING(255), allowNull: false },
  descricao: { type: DataTypes.STRING(255) }
}, {
  tableName: 'parametros',
  underscored: true,
  timestamps: true
});

export default Parametro;
