const divide = (...arr) => {
  if (arr.length > 2) throw new Error("Divide excepts exactly two values.");
  if (arr[1] === 0) throw new Error("Cannot Divide by zero.");

  const result = arr[0] / arr[1];

  return result;
};

module.exports = divide;
