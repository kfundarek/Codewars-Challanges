//Complementary DNA
function DNAStrand(dna){
  return dna.split('').map(function(item, index){
  	if(item === 'A'){
  		return 'T'
  	}
  	if(item === 'T'){
  		return 'A'
  	}
  	if(item === 'C'){
  		return 'G'
  	}
  	if(item === 'G'){
  		return 'C'
  	}
  }).join('');
}