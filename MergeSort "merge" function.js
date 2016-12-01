//MergeSort "merge" function
function mergesorted(a, b) {
  var indexA = 0;
  var indexB = 0;
  var totalLength = a.length + b.length;
  var retArr =[];

  while(retArr.length<totalLength){
  	if (a[indexA]<=b[indexB] || b[indexB] === undefined && a[indexA] !== undefined){
  		retArr.push(a[indexA]);
  		indexA++;
  	}
  	if (b[indexB]<=a[indexA] || a[indexA] === undefined && b[indexB] !== undefined){
  		retArr.push(b[indexB]);
  		indexB++;
  	} 
  }

  return retArr;
}