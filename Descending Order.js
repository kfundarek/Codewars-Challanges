//Descending Order
function descendingOrder(n){
 return parseInt(n.toString().split('').sort(function (a, b){return b-a;}).join(''));
}