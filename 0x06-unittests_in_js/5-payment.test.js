const { describe, it } = require("mocha");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./5-payment");
const expect = require("chai").expect;

describe("sendPaymentRequestToApi", function() {
  beforeEach("Setting up spy to use for each test", function() {
    sinon.spy(console, "log");
  });
});
