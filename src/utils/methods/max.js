import count from "./count";

const max = (...arr) => {
  return arr.sort()[count(arr) - 1];
};

module.exports = max;
