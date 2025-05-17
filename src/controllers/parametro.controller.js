import { listarService, obterService, salvarService } from '../services/parametro.service.js';

export async function listar(_req,res,next) {
  try { res.json(await listarService()); }
  catch(e){ next(e); }
}

export async function obter(req,res,next) {
  try { res.json(await obterService(req.params.chave)); }
  catch(e){ next(e); }
}

export async function salvar(req,res,next) {
  try {
    const param = await salvarService(req.params.chave, req.body);
    res.json(param);
  } catch(e){ next(e); }
}
