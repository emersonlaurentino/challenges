const { simpleArraySum } = require(".");

describe("Simple Array Sum", () => {
  test("1", () => {
    expect(simpleArraySum([1,2,3,4,10,11])).toBe(31);
  });
});
