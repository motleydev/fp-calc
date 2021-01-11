const moduloBy = require("./moduloBy");

test("divides by a modulo of four", () => {
  const moduloByFour = moduloBy(4);
  expect(moduloByFour(8)).toBe(0);
  expect(moduloByFour(7)).toBe(3);
});
