//Square Every Digit
function squareDigits(num){
  var numArr = num.toString().split('')
  numArr = numArr.map(function(item){
  	return item*item
  })
  return parseInt(numArr.join(''))
}