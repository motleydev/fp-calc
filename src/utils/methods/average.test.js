const average = require("./average");

test("averages 4,2,3", () => {
  expect(average(4, 2, 3)).toBe(3);
});
