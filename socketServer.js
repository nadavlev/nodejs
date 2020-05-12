const server = require('net').createServer()
let counter = 0;
let sockets = {};

server.on('connection', socket => {
    socket.id = counter++;
    sockets[socket.id] = socket;

    console.log(`Client ${socket.id} connected`);
    socket.write(`Welcome client ${socket.id}`);

    socket.on('data', data => {
        Object.entries(sockets).forEach(([, cs]) => {
            //cs.write(`${socket.id}: `);
            cs.write(data);
        });
    });

    socket.on('end', () => {
        delete sockets[socket.id];
        console.log(`Client ${socket.id} disconnected`);
    });
});

server.listen(8000, () => console.log('Server connected'));
