const fibonacci = function (num) {
  let a = 0,
    b = 1;
  if (num < 0) return "OOPS";
  if (num === 0) {
    return 0;
  }
  for (i = 2; i <= num; i++) {
    const c = b;
    b = a + b;
    a = c;
  }
  return b;
};

// Do not edit below this line
module.exports = fibonacci;
