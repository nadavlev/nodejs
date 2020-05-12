const fs = require('fs');

//async :
fs.readFile(__filename, (err, data) => {
    if (err) throw err;

    // so something
});

// sync :

const data = fs.readeFileSync( __filename);
// exceptions are immediately thrown
// do something with data
