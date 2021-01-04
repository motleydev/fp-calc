const addBy = require("./addBy");

const add = (...arr) => {
  const result = arr.reduce((collector, current) => {
    const addByCollector = addBy(collector);
    return addByCollector(current);
  }, 0);
  return result;
};

module.exports = add;
