// Challenge 1 - Find the N-th Power of an element in an array
// *You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.
// Let's look at a few examples:
// array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
// array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1. */

// *pseudo code
// create a function that takes an array and a number
// declare and assign a var, which powers the N-th number in n the index of the array
// so n here is the nth index in the array
// set condition so the nth number is within the array and not outside
// and if outside return -1
// otherwise it returns the value in num which the nth index powered by n

array = [1, 2, 3, 4]; //and N = 2, then the result is 3^2 == 9;

function index(array, n) {
  let num = Math.pow(array[n], n);
  if (n === array.length || n > array.length) {
    return -1;
  } else {
    return num;
  }
}
console.log(index([1, 2, 3, 4], 10));

//---------------------------------------------------------------------

//*Challenge 2 - Gravity Flip
//There are some columns of toy cubes in the box arranged in a line. 
//The i-th column contains a_i cubes. At first, the gravity in the box is pulling the cubes downwards.
// When Bob switches the gravity, it begins to pull all the cubes to a certain side of the box, d, 
//which can be either 'L' or 'R' (left or right). Below is an example of what a box of cubes might look 
like before and after switching gravity.
//Given the initial configuration of the cubes in the box, find out how many cubes are in each of
// the n columns after Bob switches the gravity.

//Examples:

//flip('R', [3, 2, 1, 2])     =>  [1, 2, 2, 3]
//flip('L', [1, 4, 5, 3, 5])  =>  [5, 5, 4, 3, 1]

function flip(d,arr) {
  if (d === "l") {
		return arr.sort((a, b) => a - b);
	}else if (d === "r"){
		return arr.sort((a, b) => b - a);
 	}else {
  	console.log("Wrong input")
  }
  
  }
 console.log(flip("r",[3, 2, 1, 2]));

// -----------------------------------------------------------------

//*Challenge 3 - Who likes it?
/* 
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

likes [] -- must be "no one likes this"
likes ["Peter"] -- must be "Peter likes this"
likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] -- must be "Alex, Jacob and 2 others like this"

For 4 or more names, the number in and 2 others simply increases.

*/

//Solution: 
function likes(names) {
	if (names.length === 1){
  	return(`${names[0]} likes this`);
  }else if (names.length == 2) {
  	return(`${names[0]} and ${names[1]} like this`);
  }else if (names.length === 3) {
  	return(`${names[0]}, ${names[1]} and ${names[2]} like this`);
  }else if (names.length >= 4) {
  	return(`${names[0]}, ${names[1]} and ${names.length - 2} others like this`);
  }else if (names.length === 0) {
  	return(`no one likes this`);
  }
}


console.log(likes(["Max", "John", "Mark", "Russell", "Kieran", "Frank", "Dan", "Bob"]));

// -----------------------------------------------------------------

/* Challenge 4  */
/* 
Given a month as an integer from 1 to 12,
return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June),
is part of the second quarter; and month 11 (November),
is part of the fourth quarter.

*/

// Solution:

//First Method using less than or equal to

const quarterOf = (month) => {
  if (month <= 3) {
    return 1
  } else if (month <= 6) {
    return 2
  } else if (month <= 9) {
    return 3
  } else if (month <= 12) {
    return 4
  }
  
} 

console.log(quarterOf(11))

