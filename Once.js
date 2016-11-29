//Once
function once(fn) {
  var alreadyCalled = false;
  return function (){
    if (!alreadyCalled){
    alreadyCalled = true;
    return fn.apply(this, arguments);
    }
    else{
      return undefined
    }
  }
}