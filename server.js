const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('data/db.json'); // Adjust the path if necessary
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

server.listen(3000, () => {
  console.log('JSON Server is running');
});
