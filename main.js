var prime = require ('./prime.js');

for (var i = 3; i < 100000; i++) {
    var isPrime = prime(i);
    if (isPrime) {
        console.log(`${i} is prime`);
    }
};

