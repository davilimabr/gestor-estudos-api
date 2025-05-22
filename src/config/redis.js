import { createClient } from 'redis';
import dotenv from 'dotenv';

dotenv.config();

const url = process.env.REDIS_PASS
  ? `redis://:${process.env.REDIS_PASS}@${process.env.REDIS_HOST || 'localhost'}:${process.env.REDIS_PORT || 6379}`
  : `redis://${process.env.REDIS_HOST || 'localhost'}:${process.env.REDIS_PORT || 6379}`;

const redisClient = createClient({ url });

redisClient.on('error', (err) => console.error('Redis Client Error', err));

redisClient.connect().catch(console.error);

export default redisClient;
