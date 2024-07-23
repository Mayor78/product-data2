const jsonServer = require('json-server');
const path = require('path');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json')); // Adjust 'db.json' if your data file has a different name
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

server.listen(process.env.PORT || 3000, () => {
  console.log('JSON Server is running');
});
