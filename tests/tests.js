// testing code goes here

'use strict'

var chai = require('chai');
var expect = chai.expect;

var myApp = require('../app/library.js');

describe("Data types tests ", function() {
  describe("Case for some falsy values", function() {

    it("should return 'no value' for null", function() {
      expect(myApp.dataTypes(null)).to.be.equal('no value');
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


  describe("Case for Strings", function() {

    it("should return the length of `tergiversate`", function() {
      expect(myApp.dataTypes('tergiversate')).to.be.equal(12);
    })

    it("should return the length of an empty string", function() {
      expect(myApp.dataTypes('')).to.be.equal(0);
    })

    it("should return the length of `555`", function() {
      expect(myApp.dataTypes('555')).to.be.equal(3);
    })

  })

  describe("Case for arrays", function() {

    it("should return `2` for `[0, 1, 2]`", function() {
      expect(myApp.dataTypes([0, 1, 2])).to.be.equal(2);
    })

    it("should return `undefined` for `[]`", function() {
      expect(myApp.dataTypes([])).not.to.be.defined;
    })

    it("should return `undefined` for `[4, 9]`", function() {
      expect(myApp.dataTypes([4, 9])).not.to.be.defined;
    })

  })


  describe("Case for functions", function() {

    it("should call the `callback` function with argument true, and return `called callback`", function() {
      var callback = function(arg) {
        expect(arg).to.be.ok;
        if(arg === true) {
          return 'called callback';
        }
      }
      expect(myApp.dataTypes(callback)).to.be.equal('called callback');
    })

  })




})