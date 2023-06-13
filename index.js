const sumItems = (array) => {
  // Sum all the numbers in the array
  //process input so that it is flat
  let sum = 0;
  const flatArray = (array) => {
    //Iterate through array
    for (let item of array) {
      // Identify if index is an array
      if (Array.isArray(item)) {
        flatArray(item); //recursively call function
      } else {
        sum += item; //add to sum
      }
    }
    return sum;
  };
  return flatArray(array);
};

module.exports = sumItems;
