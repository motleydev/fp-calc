const divideBy = require("./divideBy");

test("divides 4 by 2 by higher-order divideBy HOC of 2", () => {
  const divideByTwo = divideBy(2);
  expect(divideByTwo(4)).toBe(2);
});

describe("Didide by zero HOC should error", () => {
  it("should throw an error", () => {
    expect(() => divideBy(0)).toThrow();
  });
});
