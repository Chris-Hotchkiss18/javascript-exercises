const add = function (num1, num2) {
  let sum = num1 + num2;
  return sum;
};

const subtract = function (num1, num2) {
  let sum = num1 - num2;
  return sum;
};

const sum = function (array) {
  let total = array.reduce(function (a, b) {
    return a + b;
  }, 0);
  return total;
};

const multiply = function (array) {
  let sum = array.reduce(function (a, b) {
    return a * b;
  });
  return sum;
};

const power = function (num1, num2) {
  let sum = num1 ** num2;
  return sum;
};

const factorial = function (num) {
  let result = num;
  if (num === 0 || num === 1) return 1;
  while (num > 1) {
    num--;
    result *= num;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
