//Recover a secret string from random triplets
var recoverSecret = function(triplets) {
	function filterDuplicates(arr){
		var tempArr=[];
		arr.forEach(function(item){
			if(tempArr.indexOf(item)===-1){
				tempArr.push(item)
			}
		})
		return tempArr;
	}
	var retArr = [];
	for (let i = 0; i<triplets.length; i++){
		retArr = retArr.concat(triplets[i])
	}
	retArr = filterDuplicates(retArr);

	for (let i=0; i<triplets.length; i++){
			//for element 0:
				if (retArr.indexOf(triplets[i][0]) > retArr.indexOf(triplets[i][1])){
					retArr.splice(retArr.indexOf(triplets[i][0]), 1);
					retArr.splice(retArr.indexOf(triplets[i][1])-1, 0, triplets[i][0])
				}
				if (retArr.indexOf(triplets[i][0]) > retArr.indexOf(triplets[i][2])){
					retArr.splice(retArr.indexOf(triplets[i][0]), 1);
					retArr.splice(retArr.indexOf(triplets[i][2])-1, 0, triplets[i][0])
				}
			//for element 1
				if (retArr.indexOf(triplets[i][1]) > retArr.indexOf(triplets[i][2])){
					retArr.splice(retArr.indexOf(triplets[i][1]), 1);
					retArr.splice(retArr.indexOf(triplets[i][2])-1, 0, triplets[i][1])
				}
	}
	
	for (let i=0; i<triplets.length; i++){
			//for element 2:
				if (retArr.indexOf(triplets[i][2]) < retArr.indexOf(triplets[i][1])){
					retArr.splice(retArr.indexOf(triplets[i][2]), 1);
					retArr.splice(retArr.indexOf(triplets[i][1])+1, 0, triplets[i][2])
				}
				if (retArr.indexOf(triplets[i][2]) < retArr.indexOf(triplets[i][0])){
					retArr.splice(retArr.indexOf(triplets[i][2]), 1);
					retArr.splice(retArr.indexOf(triplets[i][0])-1, 0, triplets[i][2])
				}
			//for element 1
				if (retArr.indexOf(triplets[i][1]) < retArr.indexOf(triplets[i][0])){
					retArr.splice(retArr.indexOf(triplets[i][1]), 1);
					retArr.splice(retArr.indexOf(triplets[i][0])+1, 0, triplets[i][1])
				}
	}
	
	return retArr.join('');
}