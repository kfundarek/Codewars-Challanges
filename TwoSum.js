//TwoSum
function twoSum(numbers, target) {
  var ans = [];
  for (var i = 0; i<numbers.length; i++){
  	for (var j = 0; j<numbers.length; j++){
  		if (i !== j && numbers[i]+numbers[j] === target){
  			ans.push(i);
        ans.push(j);
  		}
  	}
  	if (ans.length > 1){
  	  break;
  	}
  }
  return ans;
}