//The highest profit wins!
function minMax(arr){
  var retArr = [];
  retArr.push(Math.min(...arr))
  retArr.push(Math.max(...arr))
  return retArr
}