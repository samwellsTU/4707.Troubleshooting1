const coatObject = require("./script.js");

describe("coatObject Created", () => {
  test("coatObject exists", () => {
    expect(coatObject).toBeDefined();
  });
  test("'coatObject' is an object", () => {
    expect(typeof coatObject).toBe("object");
  });
});


