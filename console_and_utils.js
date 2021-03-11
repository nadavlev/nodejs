const fs = require('fs');
const util = require('util');
const assert = require('assert');

const out = fs.createWriteStream('./out.log');
const err = fs.createWriteStream('./err.log');

const console2 = new console.Console(out, err);

setInterval(function() {
    console2.log( new Date());
    console2.error(new Error('Woops'));
}, 5000);

//console usses util formatting

console.log('number %d', 222);
console.log('string %s', 'string');
console.log('json object %j', {});
console.log(util.format('one %d', 2));
console.log(global);
console.log(util.inspect(global, {depth: 0}));
console.dir(global, {depth: 1});
console.assert(3 === '3');
// assert.ifError(new Error('testing'));
assert.ifError(2 === 2);
