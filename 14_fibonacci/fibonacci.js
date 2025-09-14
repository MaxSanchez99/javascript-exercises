const fibonacci = function (num) {
    if (typeof num == 'string') {
        num = +num;
    }

    if (num < 0) return "OOPS"

    if (num == 0) return 0;

    let prev = 1;
    let total = 1;

    for (let i = 1; i < num; i++) {
        let temp = total;
        total += prev;
        prev = temp;
    }

    return prev;
};

// Do not edit below this line
module.exports = fibonacci;
