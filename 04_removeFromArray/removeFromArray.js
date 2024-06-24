const removeFromArray = function(array, ...val) {
  let filter = [];
  array.forEach((item) => {
    if(!val.includes(item))
      filter.push(item);
  })
  // for(let i = 0; i< array.length; i++){
  //   if(array[i] != val)
  //     filter.push(array[i]);
  // } 
  return filter;
};

// Do not edit below this line
module.exports = removeFromArray;
