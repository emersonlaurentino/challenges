const { plusMinus } = require(".");

describe("Plus Minus", () => {
  test("1", () => {
    expect(JSON.stringify(plusMinus([1, 1, 0, -1, -1]))).toBe(
      JSON.stringify([0.4, 0.4, 0.2])
    );
  });
  test("2", () => {
    expect(JSON.stringify(plusMinus([-4, 3, -9, 0, 4, 1]))).toBe(
      JSON.stringify([0.5, 0.333333, 0.166667])
    );
  });
  test("3", () => {
    expect(JSON.stringify(plusMinus([-4, 3, -9, 0, 4, 1]))).toBe(
      JSON.stringify([0.5, 0.333333, 0.166667])
    );
  });
  test("4", () => {
    expect(JSON.stringify(plusMinus([1, 2, 3, -1, -2, -3, 0, 0]))).toBe(
      JSON.stringify([0.375, 0.375, 0.25])
    );
  });
  test("5", () => {
    expect(
      JSON.stringify(plusMinus([0, 100, 35, 0, 94, 40, 42, 87, 59, 0]))
    ).toBe(JSON.stringify([0.7, 0.0, 0.3]));
  });
});
