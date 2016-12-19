//Common Denominators
function convertFrac(lst){
  console.log(lst);
  var commonNumerator;
  var commonDenominator;
  var currentLCM = undefined;
  var finalLCM

  
  function euclidianAlgorithm (a, b){
  	 var divisor = Math.min(a, b);
  	 var numToDivide = Math.max(a, b);
  	 var temp;
  	 while(numToDivide%divisor !== 0){
  	 	temp = divisor;
  	 	divisor = numToDivide%divisor;
  	 	numToDivide= temp;
  	 }
  	 return divisor
  }
  
  for (let i=0; i<lst.length; i++){
  	if (i===0){
  		commonNumerator = lst[i][1] * lst[i+1][1];
  		commonDenominator = euclidianAlgorithm(lst[i][1], lst[i+1][1]);
  		currentLCM = commonNumerator/commonDenominator;
      i++
    }
    else{
    	commonNumerator = currentLCM*lst[i][1];
    	commonDenominator = euclidianAlgorithm(currentLCM, lst[i][1])
    	currentLCM = commonNumerator/commonDenominator
    	if (i===lst.length-1){
    	  finalLCM = currentLCM
    	  break;
    	}
    }
  }

  var retArr = lst.map(function(item, index){
    var multiple = finalLCM/item[1]
    return `(${item[0]*multiple},${item[1]*multiple})`
  })

  return retArr.join('')

}
