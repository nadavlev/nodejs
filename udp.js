const dgram = require('dgram');
const PORT = 3333;
const HOST = '127.0.0.1';

//server
const server = dgram.createSocket('udp4');

server.on('listening', () => console.log('server is listening'));

server.on('message', (msg, rinfo) => {
    console.log(`${rinfo.address}: ${rinfo.post}: ${msg}`);
});

server.bind(PORT, HOST);

setInterval(function() {
    const client = dgram.createSocket('udp4');
    const msg = Buffer.from('Nadav lev');

    client.send(msg, 0, msg.length, PORT, HOST, (err) => {
        if (err) throw err;

        console.log('UDP message sent');
        client.close;
    });
}, 1000);
