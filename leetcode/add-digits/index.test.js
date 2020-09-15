const { addDigits } = require(".");

describe("258. Add Digits", () => {
  test("1", () => {
    expect(addDigits(38)).toBe(2);
  });
  test("2", () => {
    expect(addDigits(19)).toBe(1);
  });
  test("3", () => {
    expect(addDigits(9)).toBe(9);
  });
  test("4", () => {
    expect(addDigits(18)).toBe(9);
  });
});
