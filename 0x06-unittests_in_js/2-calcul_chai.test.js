const expect = require("chai").expect;
const { it, describe } = require("mocha");
const calculateNumber = require("./2-calcul_chai");

describe("calculateNumber()", function() {
  it(`checking if numbers round`, function() {
    const res = calculateNumber("SUM", 1, 2);
    assert.strictEqual(res, 3);
  });
  it(`checking if numbers round`, function() {
    const res = calculateNumber("SUBTRACT", 1.4, 2.2);
    assert.strictEqual(res, -1)
  });
  it(`checking if numbers round`, function() {
    const res = calculateNumber("SUBTRACT", 4.9, 2.7);
    assert.strictEqual(res, 2);
  });
  it(`checking if numbers round`, function() {
    const res = calculateNumber("DIVIDE", 4, 2);
    assert.strictEqual(res, 2);
  });
  it(`checking if numbers round`, function() {
    const res = calculateNumber("DIVIDE", 1.7, 0);
    assert.strictEqual(res, "Error");
  });
  it(`checking if numbers round`, function() {
    const res = calculateNumber("DIVIDE", 1.4, 4.6);
    assert.strictEqual(res, 0.2);
  });
});
