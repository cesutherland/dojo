chai = require "chai"
chai.should()

describe "FizzBuzz", ->
	it "should return the number for numbers with powers other than three or five", ->
		3.toString().should.equal "Fizz"