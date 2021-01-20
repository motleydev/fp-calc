const max = require("./max");

test("finds the maximum value of 4,2,3", () => {
  expect(max(4, 2, 3)).toBe(4);
});
