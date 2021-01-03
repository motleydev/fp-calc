const addBy = require("./addBy");

test("adds 1 to 3 by higher-order addBy HOC of 1", () => {
  const addByOne = addBy(1);
  expect(addByOne(3)).toBe(4);
});
