//Reach Me and Sum my Digits
function sumDigNthTerm(initval, patternl, nthterm) {
    var holderArr = [initval];
    var subRoutine = function (val) {
	    if(holderArr.length >= nthterm){
	      var rawAns = holderArr[nthterm-1];
	      return rawAns;
	  	}
	  	for (var i = 0, j = val; i<patternl.length; i++){
	  		j += patternl[i];
	  		holderArr.push(j);
	  	}
	  	subRoutine(holderArr[holderArr.length-1])
	};
	
	var y = subRoutine(initval);

	return subRoutine(initval).toString().split('').reduce(function(accum, item){return parseInt(accum)+parseInt(item)});
}
