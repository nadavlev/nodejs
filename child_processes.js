const {spawn} = require('child_process');

const find = spawn('node', ['child_process_a.js']);
//const wc = spawn('find',['/c', '/v']);

//find.stdout.pipe(wc.stdin);

find.stdout.on('data', (data) => {
     console.log(`loop## ${data}`);
});
