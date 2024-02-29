const assert = require("assert");
const { it, describe } = require("mocha");
const calculateNumber = require("./1-calcul");

describe("calculateNumber()", function() {
  it(`checking if numbers round`, function() {
    const res = calculateNumber("SUM", 1, 2);
    assert.strictEqual(res, 3);
  });
  it(`checking if numbers round`, function() {
    const res = calculateNumber("SUBSTRACT", 1.4, 2.2);
    assert.strictEqual(res, -1);
  });
})