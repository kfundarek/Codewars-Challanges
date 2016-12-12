//Javascript Magic Function
function MagicFunction(...args) {
  let sum = 0;
  let retVal = (...args) => {
    sum += args.filter(a => !isNaN(a))   
               .map(Number)              
               .reduce((x,y) => x+y, 0); 
    return retVal;
  }
  retVal.valueOf = () => sum;
  return retVal(...args);
}


// function MagicFunction() {
//     var runningTally = 0;
//     var sum = function () {
//     	for(var i = 0; i<arguments.length; i++){
//     		var newNum = typeof parseInt(arguments[i]) === "number" ? parseInt(arguments[i]) : 0;
//     		runningTally += newNum
//     	}
//     	return runningTally;
//     }
//     return function(){
//     	return sum.apply(this, arguments);
//     }
// }


// MagicFunction(1, 2)(3, 4, 5)(6)(7, 10)