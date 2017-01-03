//Growth of a Population
function nbYear(p0, percent, aug, p) {
    // your code
    var ans = 0;
    count=0;
    while (ans<p){
	    ans = p0 + (p0*(percent/100))+aug
	    count++
	    p0 = ans
	}
	return count
}
