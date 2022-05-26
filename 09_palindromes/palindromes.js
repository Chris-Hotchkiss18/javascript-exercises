const palindromes = function (word) {
  newWord = word.toLowerCase().replace(/[^a-z]/g, "");
  return newWord.split("").reverse().join("") === newWord;
};

// Do not edit below this line
module.exports = palindromes;
