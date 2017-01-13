//altERnaTIng cAsE <=> ALTerNAtiNG CaSe
String.prototype.toAlternatingCase = function () {
  var arr = this.split('');
  return arr.map(function(item, index){
    if(/[a-z]/.test(item)){
      return item.toUpperCase();
    }
    if(/[A-Z]/.test(item)){
      return item.toLowerCase();
    } 
    else {
      return item
    }
  }).join('');
}