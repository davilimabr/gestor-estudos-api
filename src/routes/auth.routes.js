
import Router from 'express'
import { body } from 'express-validator';
import validate from '../middlewares/validation.middleware.js';
import { register, login } from '../controllers/auth.controller.js';

const router = Router();

router.post('/register',
  validate([ body('nome').notEmpty(), body('email').isEmail(), body('senha').isLength({min:6}) ]),
  register);

router.post('/login',
  validate([ body('email').isEmail(), body('senha').notEmpty() ]),
  login);

export default router;
