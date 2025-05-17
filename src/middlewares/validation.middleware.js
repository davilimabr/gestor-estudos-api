/**
 * Middleware de validação genérico para uso com express-validator.
 * Exemplo de uso em rota:
 *   router.post('/algum-endpoint',
 *     validate([
 *       body('email').isEmail(),
 *       body('senha').isLength({ min: 6 })
 *     ]),
 *     controller.handle
 *   );
 */

import { validationResult } from 'express-validator';

/**
 * @param {Array<ValidationChain>} validations – array de objetos do express-validator
 */
export default (validations = []) => async (req, res, next) => {
  try {
    // Executa todas as validações em paralelo
    await Promise.all(validations.map(v => v.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) return next();

    // Retorna 400 com a lista de campos inválidos
    return res.status(400).json({
      message: 'Erro de validação',
      errors: errors.array().map(err => ({
        field: err.param,
        msg: err.msg,
        value: err.value
      }))
    });
  } catch (e) {
    // Falha inesperada dentro das validações
    next(e);
  }
};
