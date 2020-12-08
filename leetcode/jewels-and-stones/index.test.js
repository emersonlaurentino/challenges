const { numJewelsInStones } = require(".");

describe("771. Jewels and Stones", () => {
  test("1", () => {
    expect(numJewelsInStones("aA", "aAAbbbb")).toBe(3);
  });
  test("2", () => {
    expect(numJewelsInStones("z", "ZZ")).toBe(0);
  });
});
