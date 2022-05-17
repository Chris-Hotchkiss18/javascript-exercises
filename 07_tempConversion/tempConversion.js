const ftoc = function (temp) {
  const fah = ((temp - 32) * 5) / 9;
  return Math.round(fah * 10) / 10;
};

const ctof = function (temp) {
  const cel = (temp * 9) / 5 + 32;
  return Math.round(cel * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
