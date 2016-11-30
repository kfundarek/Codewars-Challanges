//Eprips working solution in need of optimization
function findEmirp(n){
  if (n === 0){
    return [0, 0, 0]
  }
  var retArr = [];
  var primeArr = [];
  var eprime =[];
  for (var i = 2; i<n; i++){
     for(var j = i-1; j>=2; j--){
       if (i%j === 0){
         break;
       }
       if (j === 2 && i%j !== 0){
         primeArr.push(i)
       }
     }
  }
  
  primeArr.forEach(function(item, index){
  var numReversed = parseInt(item.toString().split('').reverse().join(''))
    for (var k = numReversed-1; k>=2; k--){
      if (numReversed%k === 0){
         break;
       }
      if (k === 2 && numReversed%k !== 0){
         eprime.push(item)
       }
    }
  });
  
  eprime = eprime.filter(function(item){
      return item > 11 && item !== parseInt(item.toString().split('').reverse().join(''))
  })

  var eprimeTotal = eprime.reduce(function(accum, item){
    return accum + item
  })
  
  retArr.push(eprime.length, eprime[eprime.length-1], eprimeTotal)
  return retArr
}