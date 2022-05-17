const sumAll = function (min, max) {
  const a = Math.min(min, max);
  const b = Math.max(min, max);
  let sum = 0;

  if (min < 0 || max < 0) {
    return "ERROR";
  }
  if (!Number.isInteger(min) || !Number.isInteger(max)) {
    return "ERROR";
  }

  for (i = a; i <= b; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
