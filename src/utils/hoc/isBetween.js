const lessThan = require("./lessThan");
const greaterThan = require("./greaterThan");

const isBetween = (x, y) => (z) => {
  const greaterThanX = greaterThan(x);
  const lessThanY = lessThan(y);

  return greaterThanX(z) && lessThanY(z);
};

module.exports = isBetween;
