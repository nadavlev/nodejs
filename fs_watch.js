const fs = require('fs');
const dirName = './';
let currentFiles = fs.readdirSync(dirName);

fs.watch(dirName, (eventType, fileName) => {
    console.log(`eventType: ${eventType}`);
    if (eventType === 'rename') {
        const index = currentFiles.indexOf(fileName);
        if (index >= 0) {
            console.log(`${fileName} was removed`);
            currentFiles.splice(index, 1);
        } else {
            console.log(`${fileName} was Added`);
            currentFiles.push(fileName);
        }
        return
    }
    if (eventType === 'change') {
        console.log(`${fileName} was changed`);
    }


});
