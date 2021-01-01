const add = (...arr) => {
  console.log(arr);
  const result = arr.reduce((collector, current) => {
    return collector + current;
  }, 0);
  return result;
};

module.exports = add;
