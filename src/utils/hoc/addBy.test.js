const addBy = require("./addBy");


describe("Add by should always add the HOC to the given value", () => {
  it("should add 1 to 3 by HOC of 1", () => {
    const addByOne = addBy(1);
    expect(addByOne(3)).toBe(4);
  });
  it("should add 5 to 7 by HOC of 5", () => {
    const addByFive = addBy(5);
    expect(addByFive(7)).toBe(12);
  });
});
