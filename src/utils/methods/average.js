const sum = require("./sum");
const count = require("./count");

const average = (...arr) => {
  return sum(...arr) / count(arr);
};

module.exports = average;
