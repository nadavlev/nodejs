//Create a certificate using openssl
const fs = require('fs');
const server = require('https').createServer({
    key: fs.readFileSync('/.key.pem'),
    cert: fs.readFileSync('./cert.pem')
});

server.on('request', (req, res) => {
    res.writeHead(200, {'content-type': 'text/plain'});
    res.write('Hello world');

    var interval = setInterval(function() {
        res.write('its time' + (new Date).toDateString() + '\n');
    }, 1500);

    setTimeout(function() {
        clearInterval(interval);
        res.end('ended');
    }, 15000);
});

server.timeout = 100000;
server.listen(443);
