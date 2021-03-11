const util = require('util');
const debuglog = util.debuglog('web');

const server = require('http').createServer();

server.on('request', (req, res) => {
    debuglog('HTTP request %s', req.url);
    res.writeHead(200, {'content-type': 'text/plain'});
    res.end('Hello world');
});

server.listen(8000);
