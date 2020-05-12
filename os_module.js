//npm docs os
//https://nodejs.org/api/os.html

const os = require('os');
// list of CPUs
console.log(os.cpus());

// network information
console.log(os.networkInterfaces());

//show free memory in bytes
console.log(os.freemem());

//type (win, linux, OS)
console.log(os.type());

//Release of current type
console.log(os.release());

//info about loged in user
console.log(os.userInfo());

//running procces
console.log(os.constants.signals);

console.log(os.constants);
