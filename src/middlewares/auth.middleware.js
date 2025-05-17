import jwt from 'jsonwebtoken';             

export default (roles = []) => (req, res, next) => {
  const auth = req.headers.authorization || '';
  const token = auth.startsWith('Bearer ') ? auth.slice(7) : null;

  if (!token) {
    return res.status(401).json({ msg: 'Token não fornecido' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    if (roles.length && !roles.includes(decoded.tipo)) {
      return res.status(403).json({ msg: 'Acesso negado' });
    }
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ msg: 'Token inválido' });
  }
};