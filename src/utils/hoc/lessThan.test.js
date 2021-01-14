const lessThan = require("./lessThan");

test("checks if 5 is less than 10", () => {
  const lessThanTen = lessThan(10);
  expect(lessThanTen(5)).toBe(true);
});
