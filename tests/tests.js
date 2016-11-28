// testing code goes here

'use strict'

var chai = require('chai');
var expect = chai.expect;

var myApp = require('../app/library.js');

describe("Data types tests ", function() {
  describe("Case for some falsy values", function() {

    it("should return 'no value' for null", function() {
      expect(myApp.dataTypes(null)).to.equal('no value');
    })

    it("should return 'no value' for undefined", function() {
      expect(myApp.dataTypes(undefined)).to.be.equal('no value');
    })

  })

  describe("Case for strings", function() {

    it("should return 4 for `true`", function() {
      expect(myApp.dataTypes("true")).to.be.equal(4);
    })

    it("should return 5 for `false`", function() {
      expect(myApp.dataTypes("false")).to.be.equal(5);
    })

  })

    describe("Case for booleans", function() {

    it("should return true for `true`", function() {
      expect(myApp.dataTypes(true)).to.be.equal(true);
    })

    it("should return false for `false`", function() {
      expect(myApp.dataTypes(false)).to.be.equal(false);
    })

  })

  describe("Case for Numbers", function() {

    it("should return 'less than 100' for 44", function() {
      expect(myApp.dataTypes(44)).to.be.equal('less than 100');
    })

    it("should return 'more than 100' for 144", function() {
      expect(myApp.dataTypes(144)).to.be.equal('more than 100');
    })

    it("should return 'equal to 100' for 100", function() {
      expect(myApp.dataTypes(100)).to.be.equal('equal to 100');
    })
  }
  )

})