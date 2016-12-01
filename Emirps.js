//Emirp solution optimized
function findEmirp(n){
  if (n === 0){
    return [0, 0, 0]
  }
  var retArr = [];
  var primeArr = [];
  var eprime =[];
  //////////////////////////////////////////
  //The following initial code was replaced/
  //by the sieveOfAtkin algorithm on lines /
  //27 to 86. This changes time complxity  /
  //from O(n^2) to O(nlogn)                /
  //                                       /
  // for (var i = 2; i<n; i++){.           /
  //    for(var j = i-1; j>=2; j--){.      /
  //      if (i%j === 0){                  /
  //        break;                         /
  //      }                                /
  //      if (j === 2 && i%j !== 0){       /
  //        primeArr.push(i)               /
  //      }                                /
  //    }                                  /
  // }                                     /
  //////////////////////////////////////////

function sieveOfAtkin(limit){
   var limitSqrt = Math.sqrt(limit);
   var sieve = [];
   var n;
 
   //prime start from 2, and 3
   sieve[2] = true;
   sieve[3] = true;
 
   for (var x = 1; x <= limitSqrt; x++) {
       var xx = x*x;
       for (var y = 1; y <= limitSqrt; y++) {
           var yy = y*y;
           if (xx + yy >= limit) {
             break;
           }
           // first quadratic using m = 12 and r in R1 = {r : 1, 5}
           n = (4 * xx) + (yy);
           if (n <= limit && (n % 12 == 1 || n % 12 == 5)) {
               sieve[n] = !sieve[n];
           }
           // second quadratic using m = 12 and r in R2 = {r : 7}
           n = (3 * xx) + (yy);
           if (n <= limit && (n % 12 == 7)) {
               sieve[n] = !sieve[n];
           }
           // third quadratic using m = 12 and r in R3 = {r : 11}
           n = (3 * xx) - (yy);
           if (x > y && n <= limit && (n % 12 == 11)) {
               sieve[n] = !sieve[n];
           }
       }
   }
 
   // false each primes multiples
   for (n = 5; n <= limitSqrt; n++) {
       if (sieve[n]) {
           x = n * n;
           for (i = x; i <= limit; i += x) {
               sieve[i] = false;
           }
       }
   }
 
   //primes values are the one which sieve[x] = true
   return sieve;
}
 
// This convertor make sit possible to get an array of actual prime numbers numbers instead ofa list of falsy and true values whose indexes are the prime numbers itself.
function convertSieve(sieve) {
  var ret = [];
  sieve.forEach(function(num, index) {
    if (num) {
      ret.push(index);
    }
  });
  return ret;
}
 
primeArr = convertSieve(sieveOfAtkin(n));

//////////////////////////////////////////
 var isPrime = function(n){
//    """Returns True if n is prime."""
    if (n === 2){
        return true
    }
    if (n === 3){
        return true
    }
    if (n % 2 === 0){
        return false
    }
    if (n % 3 === 0){
        return false
    }

    i = 5
    w = 2

    while (i * i <= n){
        if (n % i === 0){
            return false
        }
        i += w
        w = 6 - w
    }
    return true
 }
    
  primeArr.forEach(function(item, index){
  var numReversed = parseInt(item.toString().split('').reverse().join(''))
    ////////////////////////////////////////////////
    //The following code was replaced by the       /
    //isPrime function. This optimizes time        /
    //complexity from O(n) to O(sqrt(n)).          /
    //                                             /
    // for (var k = numReversed-1; k>=2; k--){.    /
    //   if (numReversed%k === 0){                 /
    //     break;                                  /
    //   }                                         /
    //   if (k === 2 && numReversed%k !== 0){      /
    //     eprime.push(item)                       /
    //   }                                         /
    // }                                           /
    ////////////////////////////////////////////////
    if (isPrime(numReversed)){
      eprime.push(item)
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
