const assert = require("assert");
const { it, describe } = require("mocha");
const calculateNumber = require("./0-calcul");

describe("calculateNumber()", function() {
  it(`checking if numbers round`, function() {
    const res = calculateNumber(1, 2);
    assert.strictEqual(res, 3);
  });
  it(`checking if numbers round`, function() {
    const res = calculateNumber(1.4, 2.2);
    assert.strictEqual(res, 3);
  });
})