Challenge: SpeedCode #2 - Array Madness

SpeedCode #2 - Array Madness
Objective
Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

E.g.

arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3
Get your timer out. Are you ready? Ready, get set, GO!!!

Solution: 

function arrayMadness(a, b) {
  // Ready, get set, GO!!!
  const aSquared = a.map(el => el**2).reduce((acc, cv) => acc + cv);
  const bSquared = b.map(el => el**3).reduce((acc, cv) => acc + cv);
  if (aSquared >= bSquared) {
    return true;
  }else {
    return false;
  }
  
}

Solution 2: ONE LINER

const arrayMadness = (a, b) => a.reduce((acc, x) => acc + x**2, 0) > b.reduce((acc, x) => acc + x**3, 0) 

Solution 3: 
function arrayMadness(a, b) {
  return a.reduce( (sum, el) => sum + el ** 2, 0) >
         b.reduce( (sum, el) => sum + el ** 3, 0);
}

Solution 3: For Loop

function arrayMadness(a, b) {
    let sum1 = 0;
    let sum2 = 0;
    for (let i =0, {length} = a; i < length; ++i)
    {
        sum1 += a[i]**2;
    }
    for (let i =0, {length} = b; i < length; ++i)
    {
        sum2 += b[i]**3;
    }
    return sum1 > sum2;
}
