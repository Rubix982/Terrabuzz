const redis = require('redis');
require('dotenv').config();

const client = redis.createClient({
  host: 'cache-store',
  port: process.env.REDIS_PORT,
});

client.on('error', (err) => {
  console.log(`Error${err}`);
});

module.exports.client = client;
