const divideBy = (y) => {
  if (y === 0) throw new Error("Cannot divide by zero");
  return (x) => x / y;
};

module.exports = divideBy;
