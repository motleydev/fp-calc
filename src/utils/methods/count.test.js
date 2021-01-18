const count = require("./count");

test("counts 4,2,3", () => {
  expect(count([4, 2, 3])).toBe(3);
});
