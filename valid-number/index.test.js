const { isNumber } = require(".");

describe("65. Valid Number", () => {
  test("1", () => {
    expect(isNumber("1")).toBe(true);
  });
  test("e", () => {
    expect(isNumber("e")).toBe(false);
  });
  test("space", () => {
    expect(isNumber(" ")).toBe(false);
  });
});
