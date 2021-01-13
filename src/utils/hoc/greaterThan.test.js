const greaterThan = require("./greaterThan");

test("checks if 20 is greater than 10", () => {
  const greaterThanTen = greaterThan(10);
  expect(greaterThanTen(20)).toBe(true);
});
