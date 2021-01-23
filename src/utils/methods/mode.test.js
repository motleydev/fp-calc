const mode = require("./mode");

test("finds the mode value of 4,2,3", () => {
  expect(mode(4, 2,1, 3,1)).toBe(1);
});
