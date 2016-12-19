//Time-like string format
function solution(hour) {
console.log(hour);
  //The hour parameter should be an integer with 3 or four digits (I.E. 800)
  var retArr =[];
  var hourArr = hour.toString().split('');
  if (hourArr.length>4 || hourArr.length<3){
  	throw 'error';
  }
  for(let i = hourArr.length-1; i>=0; i--){
  	if(i===hourArr.length-2){
  		retArr.unshift(':'+hourArr[i])
  	}
  	else{
  		retArr.unshift(hourArr[i])
  	}
  }
  return retArr.join('')
}
