//Simple Encryption #4 - Qwerty
function encrypt(text, key) {
  var obj ={
  row1Arr:  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  row1ArrUC: ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  row2Arr: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  row2ArrUC: ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  row3Arr: ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.'],
  row3ArrUC: ['Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>']
  }
  var workingArr = text.split('');
  var retArr = [];
  var keyRow1;
  var keyRow2;
  var keyRow3;
  var keyLength = key.toString().length

//format the encryption key
  if (keyLength === 0){
    return text;
  }
  if (keyLength === 1){
    keyRow1 = 0;
    keyRow2 = 0;
    keyRow3 = parseInt(key.toString()[0]);;
  }
    if (keyLength === 2){
    keyRow1 = 0;
    keyRow2 = parseInt(key.toString()[0]);
    keyRow3 =  parseInt(key.toString()[1]);
  }
    if (keyLength === 3){
    keyRow1 = parseInt(key.toString()[0]);
    keyRow2 = parseInt(key.toString()[1]);
    keyRow3 = parseInt(key.toString()[2]);
  }
  
  for (var i=0; i < workingArr.length; i++){
    var rowID;
    for (var objKey in obj){
      if (obj[objKey].includes(workingArr[i])){
        rowID = obj[objKey] 
      }
    }
    if (rowID === obj.row1ArrUC || rowID === obj.row1Arr){
      retArr.push(rowID[(rowID.indexOf(workingArr[i])+keyRow1) % 10]);
    }
    if (rowID === obj.row2ArrUC || rowID === obj.row2Arr){
      retArr.push(rowID[(rowID.indexOf(workingArr[i])+keyRow2) % 9]);
    }
    if (rowID === obj.row3ArrUC || rowID === obj.row3Arr){
      retArr.push(rowID[(rowID.indexOf(workingArr[i])+keyRow3) % 9]);
    }
    if (!(/^[a-zA-Z]+$/.test(workingArr[i]) || /^(<|>|,|\.)$/.test(workingArr[i]))){
      retArr.push(workingArr[i]);
    }
    rowID = undefined;
  }
  return retArr.join('');
}

function decrypt(text, key) {
    var obj ={
  row1Arr:  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  row1ArrUC: ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  row2Arr: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  row2ArrUC: ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  row3Arr: ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.'],
  row3ArrUC: ['Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>']
  }
  var workingArr = text.split('');
  var retArr = [];
  var keyRow1;
  var keyRow2;
  var keyRow3;
  var keyLength = key.toString().length

//format the encryption key
  if (keyLength === 0){
    return text;
  }
  if (keyLength === 1){
    keyRow1 = 0;
    keyRow2 = 0;
    keyRow3 = parseInt(key.toString()[0]);
  }
    if (keyLength === 2){
    keyRow1 = 0;
    keyRow2 = parseInt(key.toString()[0]);
    keyRow3 = parseInt(key.toString()[1]);
  }
    if (keyLength === 3){
    keyRow1 = parseInt(key.toString()[0]);
    keyRow2 = parseInt(key.toString()[1]);
    keyRow3 = parseInt(key.toString()[2]);
  }

//find out what row to figure out # of spaces to move  
  for (var i=0; i < workingArr.length; i++){
    var rowID;
    for (var objKey in obj){
      if (obj[objKey].includes(workingArr[i])){
        rowID = obj[objKey] 
      }
    }
    
    if (rowID === obj.row1ArrUC || rowID === obj.row1Arr){
           rowID = rowID.concat(rowID);
      if ((rowID.indexOf(workingArr[i])-keyRow1)<0){
        let temp = (rowID.indexOf(workingArr[i])-keyRow1)*-1
        retArr.push(rowID[10-temp]) 
      } else{
       retArr.push(rowID[(rowID.indexOf(workingArr[i])-keyRow1)]);
      }
    }
    
    if (rowID === obj.row2ArrUC || rowID === obj.row2Arr){
      rowID = rowID.concat(rowID);
      if ((rowID.indexOf(workingArr[i])-keyRow2)<0){
        let temp = (rowID.indexOf(workingArr[i])-keyRow2)*-1
        retArr.push(rowID[9-temp]) 
      } else{
       retArr.push(rowID[(rowID.indexOf(workingArr[i])-keyRow2)]);
      }
    }
    
    if (rowID === obj.row3ArrUC || rowID === obj.row3Arr){
           rowID = rowID.concat(rowID);
      if ((rowID.indexOf(workingArr[i])-keyRow3)<0){
        let temp = (rowID.indexOf(workingArr[i])-keyRow3)*-1
        retArr.push(rowID[9-temp]) 
      } else{
       retArr.push(rowID[(rowID.indexOf(workingArr[i])-keyRow3)]);
      }
    }
    
    if (!(/^[a-zA-Z]+$/.test(workingArr[i]) || /^(<|>|,|\.)$/.test(workingArr[i]))){
      retArr.push(workingArr[i]);
    }
    rowID = undefined;
  }
  return retArr.join('');
}
