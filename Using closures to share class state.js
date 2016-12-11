//Using closures to share class state
var Cat = (function CatModule () {
 
  this.weightCash = {};
  
  function Cat(name, weight){
    if (weight === undefined || weight === null || weight === NaN || typeof weight !== "number"){
      throw 'Need a proper weigth'
    }
    this.name = name;
    this.weigth = weight;
    Object.defineProperty(this, 'weight', {
      get: function() {
        return weight;
      },
      set: function(value) {
        weight = value;
        weightCash[this.name] = weight;
      }
    });
    weightCash[name] = weight;
  }

  return function(){
    return Cat.apply(this, arguments)
  }
}()); 

Cat.averageWeight = function (){
  var sum = 0;
  var numOfCats = 0;
  for (var key in weightCash){
    sum += weightCash[key];
    numOfCats++
  }
  return sum/numOfCats
}  


