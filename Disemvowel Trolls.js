//Disemvowel Trolls
function disemvowel(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  var arr = str.split('');
  arr = arr.map(function(item){
  	if(!vowels.includes(item)){
  		return item
  	}
  })
  str = arr.join('')
  return str;
}