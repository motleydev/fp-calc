const max = require('./max')

const mode = (...arr) => {
  const data = arr.reduce((collector, next) => {
      if (collector.has(next)) {
          collector.set(next, collector.get(next) + 1)
      } else {
          collector.set(next, 1)
      }
      return collector
  }, new Map());

  let leader = 0;
  let index = null;
  
  for (let [key, value] of data) {
    if (value >= leader) {
        leader = value;
        index = key
    }
  }

  return index
};

module.exports = mode;
