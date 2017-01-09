//Array.diff
function array_diff(a, b) {
	for(i=0; i<b.length; i++){
		a = a.filter(function(item, index){
			return item !== b[i]
		})
	}
 return a 
}
