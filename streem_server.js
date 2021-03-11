const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
    // fs.readFile('./bigFile', (err, data) => {
    //     if (err) throw err;
    //     res.writeHead(200, { 'Content-Type': 'text/plain' });
    //     res.end(data);
    // });

    const src = fs.createReadStream('./bigfile');
    src.pipe(res);
});

server.listen(8000);
