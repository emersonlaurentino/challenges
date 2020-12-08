const { defangIPaddr } = require(".");

describe("1108. Defanging an IP Address", () => {
  test("1", () => {
    expect(defangIPaddr("1.1.1.1")).toBe("1[.]1[.]1[.]1");
  });
  test("2", () => {
    expect(defangIPaddr("255.100.50.0")).toBe("255[.]100[.]50[.]0");
  });
});
