import path from 'path';
import jsonServer from 'json-server';

const server = jsonServer.create();
const router = jsonServer.router(path.join('db.json'));
const middlewares = jsonServer.defaults({
    static: './',
    noCors: true
});
const port = process.env.PORT || 80;

server.use(middlewares);
server.use(router);

server.listen(port);

export default server;