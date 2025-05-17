/**
 * Middleware centralizador de erros.
 * Qualquer erro lançado (throw) ou passado para next(err)
 * será interceptado aqui e convertido em resposta JSON padronizada.
 */

import { error } from '../utils/logger.js';

export default (err, req, res, _next) => {
  // Evita sobrescrever cabeçalhos já enviados
  if (res.headersSent) {
    return _next(err);
  }

  // Status HTTP: usa err.status | err.statusCode | default 500
  const status = err.status || err.statusCode || 500;

  // Log server-side
  error(`${req.method} ${req.originalUrl} -> ${status}`, err.stack || err);

  // Corpo da resposta
  const body = {
    message:
      status >= 500
        ? 'Erro interno do servidor'
        : err.message || 'Erro na requisição',
  };

  // Inclui detalhes somente em ambiente de desenvolvimento
  if (process.env.NODE_ENV !== 'production' && err.stack) {
    body.stack = err.stack.split('\n');
  }

  res.status(status).json(body);
};
