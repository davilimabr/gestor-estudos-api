import Usuario from '../models/usuario.model.js';
import { hash, Compare } from '../utils/password.js';
import jwt from 'jsonwebtoken';

export async function registerService(data) {
  data.senha_hash = await hash(data.senha);
  return Usuario.create(data);
}

export async function loginService({ email, senha }) {
  const user = await Usuario.findOne({ where:{ email } });
  
  if (!user || !Compare(senha, user.senha_hash))
    throw new Error('Credenciais inválidas');
  
  const payload = {
    id:   user.id,
    tipo: user.tipo,        
    nome: user.nome,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '8h',
  });
  
  return { token, tipo: user.tipo, nome: user.nome };
}
