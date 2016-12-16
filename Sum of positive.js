//Sum of positive
function positiveSum(arr) {
  arr = arr.filter((item) => item >= 0)
  if(arr.length === 0){
    return 0;
  }
  else{
  return arr.reduce((accum, item) => accum+item)
  }
}