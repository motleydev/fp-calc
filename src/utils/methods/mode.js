const max = require('./max')

const average = (...arr) => {
  const data = arr.reduce((collector, next) => {
      if (collector.has(next)) {
          collector.set(next, collector.get(next) + 1)
      } else {
          collector.set(next, 1)
      }
      return collector
  }, new Map());

  const entries = data.entries();
  const sortedEntries = [...entries].sort((a,b) => a[1] - b[1])

  const maxValue = max([...sortedEntries])

  console.log(maxValue);

  return "pie"

};

module.exports = average;
