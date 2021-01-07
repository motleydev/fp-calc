const sum = require("./sum");

test("sums +1 -1 +2", () => {
  expect(sum(1, -1, 2)).toBe(2);
});
