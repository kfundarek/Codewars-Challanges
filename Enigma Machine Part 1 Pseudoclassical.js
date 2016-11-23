//The Enigma Machine - Part 1: The Plugboard
Plugboard=function(wires){
  if (wires === null || wires === undefined || wires === '' || wires.length > 20){
    return "error";
  }

  this.A = undefined;
  this.B = undefined;
  this.C = undefined;
  this.D = undefined;
  this.E = undefined;
  this.F = undefined;
  this.G = undefined;
  this.H = undefined;
  this.I = undefined;
  this.J = undefined;
  this.K = undefined;
  this.L = undefined;
  this.M = undefined;
  this.N = undefined;
  this.O = undefined;
  this.P = undefined;
  this.Q = undefined;
  this.R = undefined;
  this.S = undefined;
  this.T = undefined;
  this.U = undefined;
  this.V = undefined;
  this.W = undefined;
  this.X = undefined;
  this.Y = undefined;
  this.Z = undefined;

  var validPairing = true;
  var abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  var wireArr = wires.split('');
  //console.log(wireArr)
  for (var i = 0; i<wireArr.length; i++){
    //console.log(wireArr[i]);
    if (!abc.includes(wireArr[i]) && wireArr[i] !== undefined){
      this[wireArr[i]] = wireArr[i];
      //console.log("thought "+wirearr[i]+ "was beat")
    }
    if (wireArr[i] === ' '){
      this[space] = ' ';
    }
    if (abc.includes(wireArr[i].toUpperCase()) &&
        this[wireArr[i]] !== undefined){
          validPairing = false;
          //console.log("breaking out!!! at " +wireArr[i] )
          break;
    }
    if (abc.includes(wireArr[i].toUpperCase()) &&
        abc.includes(wireArr[i+1].toUpperCase()) &&
        this[wireArr[i]] === undefined &&
        this[wireArr[i+1]] === undefined){
          this[wireArr[i]] = wireArr[i+1];
          this[wireArr[i+1]] = wireArr[i];
          i++;
          //console.log("tried to set "+wireArr[i]+" in the obj")
    }
  }
  
  //console.log(this);
  var unwiredCount = 0;
  for (var key in this){
    console.log("in loop for unwired characters at char "+this[key]);
    if (this[key] === undefined){
      unwiredCount++
      if(unwiredCount>6){
        validPairing =false;
        //break;
      }
      this[key] = key;
    }
  }
  

  if (!validPairing){
    return "error";
  }
}

Plugboard.prototype.process = function(wire){
  if (this.space === this[wire]){
    return ' '
  }
  else{
  return this[wire] ? this[wire] : "Invalid translation";
  }
}