//Calculating with Functions
function zero() {
  if (arguments.length === 0){
    return 0
  }
  if (arguments.length>0){
    return arguments[0](0)
  }
}

function one() {
  if (arguments.length === 0){
    return 1
  }
  if (arguments.length>0){
    return arguments[0](1)
  }
}

function two() {
  if (arguments.length === 0){
    return 2
  }
  if (arguments.length>0){
    return arguments[0](2)
  }
}

function three() {
  if (arguments.length === 0){
    return 3
  }
  if (arguments.length>0){
    return arguments[0](3)
  }
}

function four() {
  if (arguments.length === 0){
    return 4
  }
  if (arguments.length>0){
    return arguments[0](4)
  }
}

function five() {
    if (arguments.length === 0){
    return 5
  }
  if (arguments.length>0){
    return arguments[0](5)
  }
}

function six() {
  if (arguments.length === 0){
    return 6
  }
  if (arguments.length>0){
    return arguments[0](6)
  }
}

function seven() {
  if (arguments.length === 0){
    console.log('my length is 7')
    return 7
  }
  if (arguments.length>0){
    console.log(arguments[0]);
    return arguments[0](7)
  }
}

function eight() {
  if (arguments.length === 0){
    return 8
  }
  if (arguments.length>0){
    return arguments[0](8)
  }
}

function nine() {
  if (arguments.length === 0){
    return 9
  }
  if (arguments.length>0){
    return arguments[0](9)
  }
}

function plus(x) {
  return function(y){
    return x+y
  }
}

function minus(x) {
  return function(y){
    return y-x;
  }
}

function times(x) {
  return function(y){
    return x*y
  }
}

function dividedBy(x) {
  return function(y){
    return y/x
  }
}