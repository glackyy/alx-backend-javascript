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

describe("Cart page", function () {
  it("check correct status code for correct url", function (done) {
    request.get("http://localhost:7865/cart/12", function (err, res, body) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it("check correct content for correct url", function (done) {
    request.get("http://localhost:7865/cart/12", function (err, res, body) {
      expect(body).to.contain("Payment methods for cart 12");
      done();
    });
  });

  it("check correct status code for incorrect url", function (done) {
    request.get("http://localhost:7865/cart/ok", function (err, res, body) {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});

describe("Available_payments page", function() {
  it(`Checking correct status for correct url`, function() {
    request.get("http://localhost:7865/available_payments", (err, res, body) => {
      if (err) {
        expect(res.statusCode).to.not.equal(200);
      } else {
        expect(res.statusCode).to.equal(200);
      }
    });
  });
  it(`Checking correct body content for correct url`, function() {
    const option = {json: true};
    const payLoad = {
      payment_methods: {
        credit_cards: true,
        paypal: false
      }
    }
    request.get("http://localhost:7865/available_payments", option, (err, res, body) => {
      if (err) {
        expect(res.statusCode).to.not.equal(200);
      } else {
        expect(body).to.deep.equal(payLoad);
      }
    });
  });
});

describe("Login", function() {
  it(`Checking correct status code for request that's sent properly`, function(done) {
    const option = {
        url: "http://localhost:7865/login",
        json: true,
        body: {
            userName: 'JOE'
        }
    };
    request.post(option, function(err, res, body) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
  it(`Checking correct content for request that's sent properly`, function(done) {
    const option = {
      url: "http://localhost:7865/login",
      json: true,
      body: {
        userName: 'JOE'
      }
    };
    request.post(option, function(err, res, body) {
      if (err) {
        expect(res.statusCode).to.not.equal(200);
      } else {
        expect(body).to.contain('Welcome JOE');
      }
      done();
    });
  });
  it(`Checking correct status code for request that's not sent properly`, function(done) {
    const option = {
      url: "http://localhost:7865/login",
      json: true,
      body: {
        usme: 'JOE'
      }
    };
    request.post(option, function(err, res, body) {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});
