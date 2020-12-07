const { compareVersion } = require(".");

describe("165. Compare Version Numbers", () => {
  test("1", () => {
    expect(compareVersion("1.01", "1.001")).toBe(0);
  });
  test("2", () => {
    expect(compareVersion("1.0", "1.0.0")).toBe(0);
  });
  test("3", () => {
    expect(compareVersion("0.1", "1.1")).toBe(-1);
  });
  test("4", () => {
    expect(compareVersion("1.0.1", "1")).toBe(1);
  });
  test("5", () => {
    expect(compareVersion("7.5.2.4", "7.5.3")).toBe(-1);
  });
  test("6", () => {
    expect(compareVersion("7.5.2", "7.5.3")).toBe(-1);
  });
});
