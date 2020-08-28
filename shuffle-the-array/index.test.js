const { shuffle1 } = require(".");

describe("1470. Shuffle the Array", () => {
  test("1", () => {
    const nums = [2, 5, 1, 3, 4, 7];
    const n = 3;

    const output = [2, 3, 5, 4, 1, 7];

    expect(JSON.stringify(shuffle1(nums, n))).toBe(JSON.stringify(output));
  });
});
