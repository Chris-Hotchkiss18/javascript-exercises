const removeFromArray = function (arr, val1, val2, val3, val4) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (
      arr[i] === val1 ||
      arr[i] === val2 ||
      arr[i] === val3 ||
      arr[i] === val4
    ) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
};
// Do not edit below this line
module.exports = removeFromArray;
