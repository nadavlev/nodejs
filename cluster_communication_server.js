const http = require('http');
const pid = process.pid;

let userCount = 0;

http.createServer((req, res) => {
    for (let i = 0; i < 1e7; i++);
    res.write(`Handled by process ${pid}`);
    res.end(`Users: ${userCount}`);
}).listen(8080, () => {
    console.log(`Started process ${pid}`);
});

process.on('message', msg => {
    userCount = msg.userCount;
})

setTimeout(() => {
    process.exit(1);
}, Math.random() * 10000);
