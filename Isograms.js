//Isograms
function isIsogram(str){
  //...
  var ans = true;
  strArr= str.toLowerCase().split('')
  for (var i=0; i<strArr.length; i++){
    var temp=strArr[i]
    strArr.splice(i, 1)
    if (strArr.indexOf(temp) !== -1){
      ans=false
      break;
    }
  }
  return ans
}