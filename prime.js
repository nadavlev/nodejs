const test_prime = (n) => {
    if (n ===1 ) {
        return false
    }
    else if (n === 2 ) {
        return true;
    }
    else {
        for (var x = 2; x < n; x++) {
            if (n % x === 0) {
                return false;
            }
        }
        return true;
    }
}

if (require.main == module) {
    console.log(`is ${process.argv[2]} prime ?  ${test_prime(process.argv[2])}`); test_prime(process.argv[2])
} else {
    module.exports = test_prime;
}
