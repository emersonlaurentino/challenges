const { compareTriplets } = require(".");

describe("Compare the Triplets", () => {
  test("1", () => {
    expect(JSON.stringify(compareTriplets([5, 6, 7], [3, 6, 10]))).toBe(
      JSON.stringify([1, 1])
    );
  });
  test("2", () => {
    expect(JSON.stringify(compareTriplets([17, 28, 30], [99, 16, 8]))).toBe(
      JSON.stringify([2, 1])
    );
  });
});
