const palindromes = function (str) {
    let noSpaces = str.replaceAll(/[^a-zA-Z0-9]/g, '').toLowerCase();

    let i = 0
    let j = noSpaces.length - 1;

    while (i < j) {
        if (noSpaces[i] != noSpaces[j]) return false;
        i++;
        j--;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
