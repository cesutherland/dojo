var chai = require("chai");
var should = chai.should();

var patch = require("../monkeypatch");

chai.Assertion.includeStack = true;

describe("FizzBuzz", function(){
	it("should return the number for numbers with powers other than three or five", function(){
		var number = 1;
		number.toString().should.equal("1");
	});
    it("should return Fizz for powers of three", function(){
    	var number = 3;
    	number.toString().should.equal("Fizz");
    });
    it("should return Buzz for powers of five", function(){
    	var number = 5;
    	number.toString().should.equal("Buzz");
    });
    it("should return FizzBuzz for powers of three and five", function(){
    	var number = 15;
    	number.toString().should.equal("FizzBuzz");
    });
})