//Extract the domain name from a URL
function domainName(url){
  var holderArr =[]
  var workArr=url.split('');
  var inDomain = false;
  var afterDomain = false;
  var noPrefix = !workArr.reduce(function(accum, item, i, workArr){
    if (workArr[i] === '/' && workArr[i+1] === '/'){accum = true} return accum}, false);
  if (noPrefix && url[1] !== 'w'){
    inDomain = true
  }
  for(var i = 0; i<workArr.length; i++){
    if (inDomain && workArr[i] === '.'){
      afterDomain = true
    }
    if (inDomain && !afterDomain){
      holderArr.push(workArr[i]);
    }
    if (!inDomain && workArr[i] === '/' && workArr[i-1] === '/' && workArr[i+1] !== 'w' && (workArr[i+1] !== 'w' && workArr[i+2] !== 'w')){
      inDomain = true;
    }
    if (!inDomain && workArr[i] === '.' && workArr[i-1] === 'w' && workArr[i-2] === 'w' && workArr[i-3] === 'w'){
      inDomain = true;
    }
  }
  return holderArr.join('');
}