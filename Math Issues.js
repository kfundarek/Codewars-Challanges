//Math Issues
Math.round = function(number) {
	partialVal = number%1
	if (partialVal >=.5){
		return (number-partialVal)+1
	}
	else{
		return number-partialVal
	}
};

Math.ceil = function(number) {
	partialVal = number%1
	if (partialVal===0){
		return number;
	}
	else{
		return (number-partialVal)+1
	}
};

Math.floor = function(number) {
	partialVal = number%1
	if (partialVal===0){
		return number;
	}
	else{
		return (number-partialVal)
	}
};