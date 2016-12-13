//Maximum subarray sum
//Brute force solution in need of optimizaton
var maxSequence = function(arr){
  // ...
  var currentHigh = 0;
  var currentCount = 0;
  var allNeg = arr.reduce(function(accum, item){
  	if (item > 0){
  		accum = false
  	}
  }, true)
  if (allNeg || arr === []){
  	return 0
  }

  for (let i=0; i<arr.length; i++){
  	for (let j = i; j<arr.length; j++){
  		currentCount += arr[j]
  		if(currentCount>currentHigh){
  			currentHigh = currentCount
  		}
    }
    currentCount=0;
  };
  return currentHigh
}
