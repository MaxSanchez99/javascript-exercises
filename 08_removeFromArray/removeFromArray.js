const removeFromArray = function (...args) {
    let array = args[0]
    let removeArr = args.slice(1)
    return array.filter((item) => !removeArr.includes(item));

};

// Do not edit below this line
module.exports = removeFromArray;
