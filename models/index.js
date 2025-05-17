import { readdirSync } from 'fs';
import { basename as _basename, join } from 'path';
const basename  = _basename(__filename);
import sequelize from '../config/database';
const db        = { sequelize };

// Carrega dinamicamente cada model deste diretório
readdirSync(__dirname)
  .filter(f => f !== basename && f.endsWith('.model.js'))
  .forEach(file => {
    const model = require(join(__dirname, file));
    db[model.name] = model;
  });

export default db;