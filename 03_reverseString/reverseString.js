const reverseString = function(str) {
  let rev = "";
  let j=0;
  for(let i=str.length-1; i>=0; i--){
    rev += str[i];
  }
  return rev;
};

// Do not edit below this line
module.exports = reverseString;
