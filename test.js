
var main = require('./main.js')
var chai = require('chai');
var expect = chai.expect;


describe("Test", function () {
  
  describe("getPage", function () {
  
    it("Should return the html document as a string", function () {
      var page = 'http://blog.modulus.io/node.js-tutorial-how-to-use-request-module'

      expect(main.getPage(page)).to.be.a('string');  
    });
  
  });
});