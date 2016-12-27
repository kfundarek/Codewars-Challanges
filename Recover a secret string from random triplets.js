//Recover a secret string from random triplets
//Working solution that needs to be optimized: 
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

	var workingObj = {};
	var finalObj ={};
	var retArr = [];
	var letterCount = 0;
	triplets.forEach(function(element){
		element.forEach(function(item){
			if(!workingObj.hasOwnProperty(item)){
				workingObj[item]=[];    
	    	}
	  	})
		workingObj[element[0]].push(element[1]);
		workingObj[element[0]].push(element[2]);
		workingObj[element[1]].push(element[2]);
	})
	
	
	for(let key in workingObj){
		workingObj[key].forEach(function(item){
			workingObj[key]= workingObj[key].concat(workingObj[item]);
		})
	}
	
	for(let key in workingObj){
		workingObj[key].forEach(function(item){
			workingObj[key]= workingObj[key].concat(workingObj[item]);
		})
	}
	
	
	for(let key in workingObj){
		letterCount++
		workingObj[key]=filterDuplicates(workingObj[key]);
	}
	for(var i=0; i<=letterCount; i++){
		for(let key in workingObj){
			if(workingObj[key].length===i){
				retArr.unshift(key)
			}
		}
	}
	return retArr.join('');
}
