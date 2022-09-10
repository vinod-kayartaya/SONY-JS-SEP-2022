const http = require('http');

const handleRequest = (req, resp) => {
    resp.write('<h1>Hello, and welcome</h1>');
    resp.end();
};

const server = http.createServer(handleRequest);

console.log('starting the server');
server.listen(1234, () => console.log('server started'));
