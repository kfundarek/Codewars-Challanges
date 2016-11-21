var addOne = function(e) {return e + 1;};
var square = function(e) {return e * e;};

// Extend the Function prototype with a method pipe
Function.prototype.pipe = function(func) {
    return function(i) {
	return func.call(null, this.call(null, i));
    }.bind(this);
};

var result = [1,2,3,4,5].map(addOne.pipe(square));