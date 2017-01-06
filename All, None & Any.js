//All, None & Any
Array.prototype.all = function(func) {
  // TODO: Implement this function
  return this.filter(func).length === this.length
};

Array.prototype.none = function (func) {
  // TODO: Implement this function
  return this.filter(func).length === 0
};

Array.prototype.any = function (func) {
  // TODO: Implement this function
  return this.filter(func).length > 0
};