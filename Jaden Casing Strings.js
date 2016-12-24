//Jaden Casing Strings

String.prototype.toJadenCase = function () {
  //...
  stringArr = this.split(' ');
  return stringArr.map(function(item, index){
    item = item.split('');
    item[0] = item[0].toUpperCase();
    item = item.join('');
    return item
  }).join(' ');
};