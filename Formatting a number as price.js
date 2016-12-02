//Formatting a number as price
var numberToPrice = function(number) {
  if (typeof number !== 'number'){
    return 'NaN'
  }
  var numArr =[]
  var isNeg = number<0
  var wholenum;
  var fraction;
  var hasFraction = number.toString().includes('.')
  if (isNeg){
    number = number*-1
  }
  if (hasFraction){
  numArr = number.toString().split('.' );
  wholenum = numArr[0].split('');
  fraction = numArr[1].slice(0, 2)
  if (fraction.length === 1){
    fraction = fraction+'0'
  }
  }
  else{
    wholenum = number.toString().split('');
    fraction = '00';
  }
  var commaCounter=0;
  var wholenumRetArr = [];
    for (var i = wholenum.length-1; i>=0; i--){
    if (commaCounter === 3){
      wholenumRetArr.unshift(',');
      commaCounter = 0;
    }
    wholenumRetArr.unshift(wholenum[i]);
    commaCounter++
  }
  var retval= wholenumRetArr.join('')+'.'+fraction
  if (isNeg){
    return '-'+retval
  }
  else{
    return retval
  }
}