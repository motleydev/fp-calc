const isBetween = require("./isBetween");

test("checks if 7 is between 3 and 10", () => {
  const isBetweenThreeAndTen = isBetween(3, 10);
  expect(isBetweenThreeAndTen(7)).toBe(true);
});
