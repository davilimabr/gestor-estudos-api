import { registerService, loginService } from '../services/usuario.service.js';

export async function register(req,res,next) {
  try {
    const user = await registerService(req.body);
    res.status(201).json(user);
  } catch(e){ next(e); }
}

export async function login(req,res,next) {
  try {
    const data = await loginService(req.body);
    res.json(data);
  } catch(e){ next(e); }
}
