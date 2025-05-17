import { createClient } from 'redis';

const client = createClient({
  url: process.env.REDIS_URL
});

client.on('error', console.error);
client.connect();

export default client;
