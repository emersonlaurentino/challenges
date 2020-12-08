const { smallerNumbersThanCurrent } = require(".");

describe("1365. How Many Numbers Are Smaller Than the Current Number", () => {
  test("1", () => {
    expect(JSON.stringify(smallerNumbersThanCurrent([8, 1, 2, 2, 3]))).toBe(
      JSON.stringify([4, 0, 1, 1, 3])
    );
  });
  test("2", () => {
    expect(JSON.stringify(smallerNumbersThanCurrent([6, 5, 4, 8]))).toBe(
      JSON.stringify([2, 1, 0, 3])
    );
  });
  test("3", () => {
    expect(JSON.stringify(smallerNumbersThanCurrent([7, 7, 7, 7]))).toBe(
      JSON.stringify([0, 0, 0, 0])
    );
  });
});
