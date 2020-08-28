const { runningSum1 } = require(".");

describe("1480. Running Sum of 1d Array", () => {
  test("1", () => {
    const input = [1, 2, 3, 4];
    const output = [1, 3, 6, 10];

    expect(JSON.stringify(runningSum1(input))).toBe(JSON.stringify(output));
  });
});
