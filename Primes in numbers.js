//Primes in numbers
function primeFactors(n){
    //create an empty array for prime divisors to be pushed to
  primeDivisors = [];
    //create a Prime Number Generator (PNG)
  var primeArr =[2];
  var primeGenLimit = 100;
  var getPrimes= function(num){
  for (let i = primeArr.length-1; i<num; i++){           
     for(let j = i-1; j>=2; j--){      
       if (i%j === 0){                  
         break;                         
       }                                
       if (j === 2 && i%j !== 0){       
         primeArr.push(i)               
       }                                
     }                                  
  }
  console.log(primeArr);
  }

  	getPrimes(primeGenLimit);  
    //check if n is prime against the PNG cache
    if (primeArr.includes(n)){
    	return `(${n})`
    }
    
    //try to divide n by increasing primes given by the PNG untill the n is divided without a remainder
    var subRT = function(n){
    for (let i = 0; i<primeArr.length; i++){
    	if (n%primeArr[i] === 0 && primeArr.includes(n/primeArr[i])){
    		primeDivisors.push(primeArr[i]);
    		primeDivisors.push(n/primeArr[i]);
    		break;
    	}
    	if (i>=primeArr.length-1){
    		primeGenLimit += 100;
    		getPrimes(primeGenLimit);
    		if (primeArr.includes(n)){
    	      return `(${n})`
            }
    	}
    	if (n%primeArr[i] === 0 && !primeArr.includes(n/primeArr[i])){
    		primeDivisors.push(primeArr[i])
    		console.log(`the Divisor is ${primeArr[i]}`)
    		n = n/primeArr[i];
    		console.log(`the new dividend is ${n}`)
    		console.log(`the retArr is ${primeDivisors}`)

    		subRT(n)
    		break;
    	}
    }  
    }
    subRT(n)
    var retArr = primeDivisors.map(function(item, index){
    	var countArr= primeDivisors.filter(function(element){return element === item})
    	if(countArr.length>1){
    		return `(${item}**${countArr.length})`
    	}
    	else{
    		return `(${item})`
    	}
    })

    var finalRetArr =[]
    retArr.forEach(function(item){
    	if(!finalRetArr.includes(item)){
    		finalRetArr.push(item)
    	}
	})
    return finalRetArr.join('')
}
primeFactors(10);