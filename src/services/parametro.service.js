import Parametro from '../models/parametro.model.js';

export async function listarService() { return Parametro.findAll({ order:[['chave','ASC']] }); }

export async function obterService(chave) {
  const p = await Parametro.findByPk(chave);
  if (!p) throw Object.assign(new Error('Parâmetro não encontrado'), { status:404 });
  return p;
}

export async function salvarService(chave, dados) {
  const [param] = await Parametro.upsert({ chave, ...dados }, { returning:true });
  return param;
}
