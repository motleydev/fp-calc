const isEven = require("./iseven");

test("checks if 24 is even", () => {
  expect(isEven(24)).toBe(true);
});
