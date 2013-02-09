Number.prototype.toString = function(){
	var fizzBuzz = '';

	if(this%3 == 0){
		fizzBuzz = "Fizz";
	}

	if(this%5 == 0) {
		fizzBuzz += "Buzz";
	}

	return fizzBuzz || this + '';
}