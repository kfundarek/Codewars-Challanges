//Sum without highest and lowest number
function sumArray(array) {
if(array === [] || array === null || array.length===1){
  return 0
}
array.splice(array.indexOf(Math.max(...array)),1);
array.splice(array.indexOf(Math.min(...array)),1);
return array.reduce(function(accum, item){ return accum + item}, 0)
}