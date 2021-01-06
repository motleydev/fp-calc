const subtractBy = require("./subtractBy");

test("removes 3 from 10 by higher-order subtractBy HOC of 3", () => {
  const subtractByThree = subtractBy(3);
  expect(subtractByThree(10)).toBe(7);
});
