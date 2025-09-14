const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (nums) {
  return nums.reduce((total, item) => total + item, 0);
};

const multiply = function (nums) {
  if (!nums) return 0;
  return nums.reduce((total, item) => total * item);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (num) {
  let total = 1;
  for (let i = num; i > 0; i--) {
    total *= i;
  }

  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
