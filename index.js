const jsonserver =require("json-server");
const server = jsonserver.create();
const router = jsonserver.router("almacen.json");
const middlewares = jsonserver.defaults();
const port = process.env.port || 10000;

server.use(middlewares);
server.use(router);

server.listen(port);