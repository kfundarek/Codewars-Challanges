//Sum of Pairs
var sum_pairs=function(ints, s){
	var retIndArr = [undefined, ints[ints.length-1]];
	retArr = [];
	var cash = {}
	var x = ints.lastIndexOf(retIndArr[1])
	for (var i = 0; i < x; i++){
	  if (!cash.hasOwnProperty(ints[i])){
	  	cash[ints[i]] = ints[i];
		for(var j = i+1; j <= x; j++){
		  if (ints[i]+ints[j] === s){
		    retIndArr[0]=i;
		    retIndArr[1]=j;
		    x = j
            retArr[0]=ints[i];
    	    retArr[1]=ints[j];
		    break;
	      }
	    }
	  }
	}
	if (retArr[0] === undefined){
	  return undefined
	}
	return retArr
}