import { Router } from 'express';
import { body } from 'express-validator';
import validate from '../middlewares/validation.middleware.js';
import auth from '../middlewares/auth.middleware.js';
import cache from '../middlewares/cache.middleware.js'; // opcional
import { listar, obter, salvar } from '../controllers/parametro.controller.js';

const router = Router();
// Apenas ADMIN pode alterar ou criar
router.use(auth(['ADMIN']));

router.get('/',
  cache(()=> 'parametros:all'),   // leitura cacheada 5 min
  listar);

router.get('/:chave',
  cache(req=> `parametros:${req.params.chave}`),
  obter);

router.put('/:chave',
  validate([ body('valor').notEmpty() ]),
  salvar);

export default router;
