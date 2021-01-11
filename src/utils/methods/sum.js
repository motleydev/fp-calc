const addBy = require("../hoc/addBy");
const subtractBy = require("../hoc/subtractBy");

const sum = (...arr) => {
  const result = arr.reduce((collector, current) => {
    let method;

    if (current >= 0) method = addBy(current);
    if (current < 0) method = subtractBy(current);

    return method(collector);
  }, 0);
  return result;
};

module.exports = sum;
