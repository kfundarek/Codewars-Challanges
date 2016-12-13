//Poker cards encoder/decoder
function cardsConverter(input){
  if (input === null || input === undefined || Array.isArray(input) === false){
  	return null
  }
  if (input.length === 0){
    return input
  }

  var encoderObj = {
  	'Ac': 0,      
  	'2c': 1,      
  	'3c': 2,      
  	'4c': 3,      
  	'5c': 4,      
  	'6c': 5,      
  	'7c': 6,      
  	'8c': 7,      
  	'9c': 8,      
  	'Tc': 9,      
  	'Jc': 10,      
  	'Qc': 11,      
  	'Kc': 12,       
  	'Ad': 13,
  	'2d': 14,
  	'3d': 15,
  	'4d': 16,
  	'5d': 17,
  	'6d': 18,
  	'7d': 19,
  	'8d': 20,
  	'9d': 21,
  	'Td': 22,
  	'Jd': 23,
  	'Qd': 24,
  	'Kd': 25,
  	'Ah': 26,
  	'2h': 27,
  	'3h': 28,
  	'4h': 29,
  	'5h': 30,
  	'6h': 31,
  	'7h': 32,
  	'8h': 33,
  	'9h': 34,
  	'Th': 35,
  	'Jh': 36,
  	'Qh': 37,
  	'Kh': 38,
  	'As': 39,
  	'2s': 40,
  	'3s': 41,
  	'4s': 42,
  	'5s': 43,
  	'6s': 44,
  	'7s': 45,
  	'8s': 46,
  	'9s': 47,
  	'Ts': 48,
  	'Js': 49,
  	'Qs': 50,
  	'Ks': 51,  
  };

  var decoderObj = {};
  for (let key in encoderObj){
  	decoderObj[encoderObj[key]] = key
  }

  var encodedArr=[];
  var decodedArr=[];
  function compareNumbers(a, b) {
  	return a - b;
  }

  if (typeof input[0] === 'string'){
  	input.forEach(function(item, index){
  		encodedArr.push(encoderObj[item])
  	})
  	return encodedArr.sort(compareNumbers)
  }

  if (typeof input[0] === 'number'){
    input.sort(compareNumbers)
  	input.forEach(function(item, key){
  	  decodedArr.push(decoderObj[item])
  	})
  	return decodedArr
  }
}