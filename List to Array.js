// List to Array
function listToArray(list) {
  //write your code here
  var retArr = [];
  
  if (list.next===null){
  	retArr.push(list.value)
  	return retArr
  }

  while(list.next !== null){
  	retArr.push(list.value)
  	list=list.next
  	if (list.next===null){
  	  retArr.push(list.value)
    }
  }
}