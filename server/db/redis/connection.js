const redis = require('redis');
const { promisify } = require('util');
require('dotenv').config();

const client = redis.createClient({
  host: 'cache-store',
  port: process.env.REDIS_PORT,
});

client.on('error', (err) => {
  console.log(`Error${err}`);
});

module.exports = {
  ...client,
  getAsync: promisify(client.get).bind(client),
  setAsync: promisify(client.set).bind(client),
  keysAsync: promisify(client.keys).bind(client),
};
