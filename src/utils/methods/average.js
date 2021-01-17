const sum = require("./sum");

const average = (...arr) => {
  return sum(...arr) / arr.length;
};

module.exports = average;
