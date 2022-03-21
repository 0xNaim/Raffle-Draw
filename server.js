require('dotenv').config();
const app = require('./app/app');
const http = require('http');

// Create server
const server = http.createServer(app);

// Port
const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
