//Directions Reduction
function dirReduc(arr){
  var deleteCount = 0;
  var priorDeleteCount;
  while(priorDeleteCount!== 0){
	  for (var i=0; i<arr.length; i++){
	    if(arr[i] === "NORTH" && arr[i+1] === "SOUTH" || 
	  	arr[i] === "SOUTH" && arr[i+1] === "NORTH"){
	  		arr.splice(i, 2);
	  		deleteCount++
	  	}
	   	if (arr[i] === "EAST" && arr[i+1] === "WEST" || 
	  	arr[i] === "WEST" && arr[i+1] === "EAST"){
	  		arr.splice(i, 2);
	  		deleteCount++
	  	}
	   	if (i === arr.length-1){
	  	  priorDeleteCount = deleteCount
	  	  deleteCount = 0
	  	}
	  	if(!arr.length){
	  	  priorDeleteCount = 0;
	  	}
	  }
    }
  return arr
}
