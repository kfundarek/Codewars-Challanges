//Tribonacci Sequence
function tribonacci(signature,n){
  //your code here
  if (n===0){
  	return []
  };
  if (n<=3){
  	return signature.slice(0,n)
  }
  else{
  	var retArr = signature;
  	for (let i = 3; i<n; i++){
  		retArr.push(retArr[i-1]+retArr[i-2]+retArr[i-3])
  	}
  	return retArr
  }
}