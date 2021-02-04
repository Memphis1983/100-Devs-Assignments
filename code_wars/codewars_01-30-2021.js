/* 
Challenge 1 - Grasshopper - Grade book
Complete the function so that it finds the mean of the three scores passed to it and returns the letter value associated with that grade.


Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'
Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
*/

function getGrade (s1, s2, s3) {
  // Code here
  var avg = (s1 + s2 + s3) / 3
  if (avg >= 90)
    return 'A'
  if (avg >= 80)
    return 'B'
  if (avg >= 70)
    return 'C'
  if (avg >= 60)
    return 'D'
  return 'F'
}

console.log(getGrade(95, 80, 20))

/*  
Challenge 2 - Growth of a Population

In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

At the end of the first year there will be: 
1000 + 1000 * 0.02 + 50 => 1070 inhabitants

At the end of the 2nd year there will be: 
1070 + 1070 * 0.02 + 50 => 1141 inhabitants (number of inhabitants is an integer)

At the end of the 3rd year there will be:
1141 + 1141 * 0.02 + 50 => 1213

It will need 3 entire years.
More generally given parameters:

p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)

the function nb_year should return n number of entire years needed to get a population greater or equal to p.

aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

Examples:
nb_year(1500, 5, 100, 5000) -> 15
nb_year(1500000, 2.5, 10000, 2000000) -> 10
Note:
Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.

*/

function nbYear(givenPopulation, percent, newResidents, targetPopulation) {
    let latestPopulation = givenPopulation;
    let yearCount = 0;
    
    while(latestPopulation < targetPopulation) {
      let populationIncreaseFormula = (latestPopulation * (percent / 100)) + newResidents;
      
      latestPopulation += populationIncreaseFormula;
      yearCount++;
    }
    
    return yearCount;
}

console.log(nbYear(1500, 5, 100, 5000));

/* 
Challenge 3 -  Credit Card Mask
Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples
maskify("4556364607935616") == "############5616"
maskify(     "64607935616") ==      "#######5616"
maskify(               "1") ==                "1"
maskify(                "") ==                 ""

// "What was the name of your first pet?"
maskify("Skippy")                                   == "##ippy"
maskify("Nananananananananananananananana Batman!") == "####################################man!"


*/

function maskify(cc) {
  var maskedStr = "";
  for(var i = 0; i < cc.length; i++) {
    if(i < cc.length - 4) {
      maskedStr += "#";
    } else {
      maskedStr += cc.charAt(i);
    };
  }
  return maskedStr;
}

console.log(maskify("Skippy"));


/* 
Challenge 4 - Ones and Zeros
Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
However, the arrays can have varying lengths, not just limited to 4.

*/

const binaryArrayToNumber = arr => {

return  parseInt(arr.join('').toString(), 2);
};

console.log(binaryArrayToNumber([0, 0, 0, 1]));


/* 
Challenge 5 - Find the next perfect square!
Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is positive.

Examples:

findNextSquare(121) --> returns 144
findNextSquare(625) --> returns 676
findNextSquare(114) --> returns -1 since 114 is not a perfect
*/

  function findNextSquare(sq) {
    var numb = Math.sqrt(sq);
    if (numb % 1 != 0) {
       return -1;
    }

    return Math.pow(numb + 1, 2);
  }

  console.log(findNextSquare(625));