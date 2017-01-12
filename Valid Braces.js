//Valid Braces
function validBraces(braces){
  //TODO 
  var bracesObj = {
    "(":0,
    ")":0,
    "{":0,
    "}":0,
    "[":0,
    "]":0
  }
  var openers = [ '(', '{', '['];
  for (var i = 0; i<braces.length; i++){
    bracesObj[braces[i]] = bracesObj[braces[i]]+1;
    if ((braces[i]==='[' && !openers.includes(braces[i+1])) && (braces[i] === '[' && braces[i+1] !== ']') ){
      return false
    }
    if ((braces[i]==='(' && !openers.includes(braces[i+1])) && (braces[i] === '(' && braces[i+1] !== ')')){
      return false
    }
    if ((braces[i]==='{' && !openers.includes(braces[i+1])) && (braces[i] === '{' && braces[i+1] !== '}')){
      return false
    }
    if (bracesObj[')']>bracesObj['(']){
      return false;
    }
    if (bracesObj[']']>bracesObj['[']){
      return false;
    }
    if (bracesObj['}']>bracesObj['{']){
      return false;
    }
  }
  return true; 
}