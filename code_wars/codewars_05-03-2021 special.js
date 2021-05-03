Challenge: Count of positives / sum of negatives

Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].tals of each flower and return true if
 they are in love and false if they aren't.

Solution: 

function countPositivesSumNegatives(input) {
  var newArr = [];
  var positiveNumber = 0;
  var negativeNumber = 0;
  
  // Validate Input
  if (input === null || input.length === 0)
    return newArr;
  
  // Loop through array of Numbers 
  for (var i = 0; i < input.length; i++) {
    if (input[i] == 0)
     continue;
  
    // Count positives
    else if (input[i] > 0) 
      positiveNumber++;     
        
    // Sum negatives
    else if (input[i] < 0) 
      negativeNumber += input[i];
    
  }
  
  // Prepare Output
  newArr.push(positiveNumber);
  newArr.push(negativeNumber);
  
  return newArr;
}