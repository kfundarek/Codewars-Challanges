//Gauß needs help! (Sums of a lot of numbers).
function f(n){
//insert your code here.... and go crazy!
if (typeof n !== 'number' || n%1 !== 0 || n<=0){
  return false;
  }
return n*(n+1)/2
};