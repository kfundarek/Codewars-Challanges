//Reverse words
function reverseWords(str) {
  // Go for it
  returnArr = [];
  wordArr = str.split(' ');
  for(var i =0; i<wordArr.length; i++){
    returnArr.push(wordArr[i].split('').reverse().join(''))
    if (i !== wordArr.length-1){
    returnArr.push(' ');
    }
  }
  return returnArr.join('');