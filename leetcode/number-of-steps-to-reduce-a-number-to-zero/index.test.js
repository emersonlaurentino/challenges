const { numberOfSteps } = require(".");

describe("1342. Number of Steps to Reduce a Number to Zero", () => {
  test.only("1", () => {
    expect(numberOfSteps(14)).toBe(6);
  });
  test("2", () => {
    expect(numberOfSteps(8)).toBe(4);
  });
  test("3", () => {
    expect(numberOfSteps(123)).toBe(12);
  });
});
