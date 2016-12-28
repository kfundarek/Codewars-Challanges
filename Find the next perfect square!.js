//Find the next perfect square!
function findNextSquare(sq) {
	if(Math.sqrt(sq)%1 !== 0){
	  return -1;
	}
	else{
	  return Math.pow(Math.sqrt(sq)+1, 2)
	}
}