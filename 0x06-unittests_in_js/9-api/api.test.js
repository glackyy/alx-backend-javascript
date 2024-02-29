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
  it(`checking correct content length`, function(done) {
    request(options, function(error, res, body) {
      expect(res.headers['content-length']).to.equal('29');
      done();
    });
  });
});
