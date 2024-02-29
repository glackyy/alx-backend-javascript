const expect = require("chai").expect;
const { it, describe } = require("mocha");
const calculateNumber = require("./2-calcul_chai");

describe("calculateNumber()", function() {
  describe("SUM", function() {
    it(`checking if numbers round`, function() {
      expect(calculateNumber("SUM", 1, 2)).to.equal(3);
    });
    it(`checking if numbers round`, function() {
      expect(calculateNumber("SUM", 1.6, 2.6)).to.equal(5);
    });
  });  
  describe("SUM", function() {
    it(`checking if numbers round`, function() {
      expect(calculateNumber("SUM", 1, 2)).to.equal(3);
    });
    it(`checking if numbers round`, function() {
      expect(calculateNumber("SUM", 1.6, 2.6)).to.equal(5);
    });
  });  
  describe("SUM", function() {
    it(`checking if numbers round`, function() {
      expect(calculateNumber("SUM", 1, 2)).to.equal(3);
    });
    it(`checking if numbers round`, function() {
      expect(calculateNumber("SUM", 1.6, 2.6)).to.equal(5);
    });
  });  
  describe("SUM", function() {
    it(`checking if numbers round`, function() {
      expect(calculateNumber("SUM", 1, 2)).to.equal(3);
    });
    it(`checking if numbers round`, function() {
      expect(calculateNumber("SUM", 1.6, 2.6)).to.equal(5);
    });
  });  
});
