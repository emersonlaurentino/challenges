const { kidsWithCandies } = require(".");

describe("1431. Kids With the Greatest Number of Candies", () => {
  test("1", () => {
    const nums = [2, 3, 5, 1, 3];
    const n = 3;

    const output = [true, true, true, false, true];

    expect(JSON.stringify(kidsWithCandies(nums, n))).toBe(
      JSON.stringify(output)
    );
  });
});
