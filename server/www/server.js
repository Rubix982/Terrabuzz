const http = require('http');
const app = require('../app.js');

const { PORT } = process.env;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
