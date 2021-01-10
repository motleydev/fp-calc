const addBy = require("./addBy");
const subtractBy = require("./subtractBy");

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
