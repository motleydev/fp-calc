const multiplyBy = require("./multiplyBy");

test("multiplies 10 to 3 by higher-order multiplyBy HOC of 10", () => {
  const multiplyByTen = multiplyBy(10);
  expect(multiplyByTen(3)).toBe(30);
});
