const request = require("request");
const { it, describe } = require("mocha");
const expect = require("chai").expect;

describe("Index page", function() {
  const options = {
    url: "http://localhost:7865/",
    method: "GET"
  }
  it(`checking correct status code`, function(done) {
    request(options, function(error, res, body) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
  it(`checking correct content`, function(done) {
    request(options, function(error, res, body) {
      expect(body).to.contain("Welcome to the payment system");
      done();
    });
  });
});

describe("Cart page", function() {
  it(`Checking correct status code for correct url`, function(done) {
    request.get("http://localhost:7865/cart/12", function(error, res, body) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
  it(`Checking correct content for correct url`, function(done) {
    request.get("http://localhost:7865/cart/12", function(error, res, body) {
      expect(body).to.contain("Payment method for cart 12");
      done();
    });
  });
  it(`Checking correct status code for incorrect url`, function(done) {
    request.get("http://localhost:7865/cart/kim", function(error, res, body) {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});
