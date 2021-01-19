const min = require("./min");

test("finds the minimum value of 4,2,3", () => {
  expect(min(4, 2, 3)).toBe(2);
});
