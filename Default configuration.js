//Default configuration
function defaults(obj, defs) {
	var newObj = {};
	for (key in obj){
		newObj[key] = obj[key];
	}
  //loop thru the defs properties to see if they needed to be added to obj
  	for (key in defs){
  		if (!newObj.hasOwnProperty(key)){
  			newObj[key]=defs[key]
  		}
  	}
  return newObj;
}


function mandatory(err) {
	throw err;
}