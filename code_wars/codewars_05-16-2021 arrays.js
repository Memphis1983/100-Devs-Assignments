Challenge: Square(n) Sum

Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

Solution: 

function squareSum(numbers){
var res=0;

res= numbers.reduce(((a,b)=> a + (b*b)),0);

return res;
}

Solution 2: 

function squareSum(numbers){
  return numbers.reduce(function(sum, n){
    return (n*n) + sum;
  }, 0)
}