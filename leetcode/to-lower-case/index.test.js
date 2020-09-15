const { toLowerCase } = require(".");

describe("709. To Lower Case", () => {
  test("1", () => {
    expect(toLowerCase("Hello")).toBe("hello");
  });
  test("2", () => {
    expect(toLowerCase("here")).toBe("here");
  });
  test("3", () => {
    expect(toLowerCase("LOVELY")).toBe("lovely");
  });
});
