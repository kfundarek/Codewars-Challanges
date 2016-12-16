//Next bigger number with the same digits
function nextBigger(n) {
  
  var changingPortion;
  var unchangedPart;
  var mustChangeDigit;
  
  if (n.toString().length === 1) {
   return -1;
  }
  
  //convert to array & iterate to find point at which to change n (if any)
  let nArr = n.toString().split('');
  nArr=nArr.map(item => parseInt(item))
  
  for(var i=nArr.length-2; i>=0; i--){
    if(nArr[i]<nArr[i+1]){
      changingPortionWorkingArr = nArr.slice(i+1, nArr.length);
      unchangedPart = nArr.slice(0, i);
      mustChangeDigit =nArr[i];
      break;
    }
    if (i===0){
      return -1
    }
  }
  
  //swap digit at the change point w/ element whose value is greater and closest
  var swapableArr = changingPortionWorkingArr.filter(item => item>mustChangeDigit);
  var swapValue = Math.min.apply(null, swapableArr);
  var temp = mustChangeDigit
  mustChangeDigit = swapValue;
  changingPortionWorkingArr[changingPortionWorkingArr.indexOf(swapValue)] = temp;
  
  //sort the remaining elements in descending order
  changingPortionWorkingArr.sort((a, b) => a-b);
  unchangedPart[unchangedPart.length]=mustChangeDigit
  var retArr = unchangedPart.concat(changingPortionWorkingArr)
  
  retVal = parseInt(retArr.join(''));
  return retVal
}