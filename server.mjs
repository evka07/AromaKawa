const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(jsonServer.bodyParser)

server.post('/contact', (req, res) => {

    const contactData = {
        name: req.body.name,
        title: req.body.title,
        message: req.body.message,
    };

    res.json(contactData);
});

const port = 3131
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
