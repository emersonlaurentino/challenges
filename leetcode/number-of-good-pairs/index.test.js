const { numIdenticalPairs } = require(".");

describe("1512. Number of Good Pairs", () => {
  test("1", () => {
    expect(numIdenticalPairs([1, 2, 3, 1, 1, 3])).toBe(4);
  });
  test("2", () => {
    expect(numIdenticalPairs([1, 1, 1, 1])).toBe(6);
  });
  test("3", () => {
    expect(numIdenticalPairs([1, 2, 3])).toBe(0);
  });
});
