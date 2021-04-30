Challenge: Template Strings

Template Strings, this kata is mainly aimed at the new JS ES6 Update introducing Template Strings
Task
Your task is to return the correct string using the Template String Feature.
Input
Two Strings, no validation is needed.
Output
You must output a string containing the two strings with the word ```' are '```

Solution: 

var TempleStrings = function(obj, feature) {
  return `${obj} are ${feature}`
  
}
--------------------------------------------

Challenge: Is there a vowel in there?

Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array.

Solution: 

const vowels = new Set('aeiou');

function isVow(a) {
  return a.map(value => {
//  Create a var and that holds the value of Charcode 
    let charCode = String.fromCharCode(value);
//  has() method checks at every index in vowels array, if there is, returns the charcode at that index or the value as is
    return vowels.has(charCode) ? charCode : value;
  });
}
