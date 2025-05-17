// src/routes/index.js
import { Router } from 'express';
import parametroRoutes from './parametro.routes.js';  
import authRoutes from './auth.routes.js';   

// Casos especiais
import { readdirSync } from 'fs';
import { dirname, join, basename as _basename } from 'path';
import { fileURLToPath } from 'url';

const router = Router();

/* ---------- rotas ---------- */
router.use('/parametros', parametroRoutes);
router.use('/auth', authRoutes);

/* ---------- registrar modelos dinamicamente ---------- */
const __dirname = dirname(fileURLToPath(import.meta.url));
const basename  = _basename(fileURLToPath(import.meta.url));

// obj para reunir modelos (opcional: exporte depois se precisar)
const db = {};

for (const file of readdirSync(__dirname)) {
  if (file !== basename && file.endsWith('.model.js')) {
    // top-level await funciona porque estamos em "type":"module"
    const { default: model } = await import(join(__dirname, file));
    db[model.name] = model;
  }
}

export default router;
export { db };

