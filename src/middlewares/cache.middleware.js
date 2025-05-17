import redis from '../config/redis.js';

export default keyBuilder => async (req,res,next) => {
  const key = keyBuilder(req);
  const hit = await redis.get(key);
  if (hit) return res.json(JSON.parse(hit));
  res.sendResponse = res.json;
  res.json = body => {
    redis.setEx(key, 300, JSON.stringify(body)); // 5 min
    res.sendResponse(body);
  };
  next();
};
