const { interpret } = require(".");

describe("1678. Goal Parser Interpretation", () => {
  test("1", () => {
    expect(interpret("G()(al)")).toBe("Goal");
  });
  test("2", () => {
    expect(interpret("G()()()()(al)")).toBe("Gooooal");
  });
  test("3", () => {
    expect(interpret("(al)G(al)()()G")).toBe("alGalooG");
  });
});
