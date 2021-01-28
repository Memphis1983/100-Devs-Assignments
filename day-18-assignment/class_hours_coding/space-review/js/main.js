//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
const array = [1, 2, 3, 4, 5, 6, 7];
const reduced = array.reduce((a, b) => a + b, 0);
// console.log(reduced);

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function squareTheArray(arr) {
  return arr.map((x) => Math.pow(x, 2));
}
console.log(squareTheArray([2, 4, 8, 10, 3]));

//Create a function that takes string
//Print the reverse of that string to the console

//*Method 1 Reverse a String With Built-In Functions
//Step1. Use the split() method to return a new array
//Step2. Use the reverse() method to reverse the new created array
//Step3. Use the join() method to join all the elements of the array into string
//Step 4. Return the reversed string
function reverseString(str) {
  let splitString = str.split("");
  let reverseArray = splitString.reverse(); //reverseArray = ["h", "e", "l", "l", "o"].reverse();
  let joinArray = reverseArray.join(""); //joinArray = ["o", "l", "l", "e", "h"].join("");
  return joinArray;
}
// console.log(reverseString("Hello"));

//*Chaining above 3 methods together
function reverseString(str) {
  return str.split("").reverse().join("");
}
reverseString("hello");

//*Method 2 Reverse a String With a Decrementing For Loop
// Step 1. Create an empty string that will host the new created string
// Step 2. Create the FOR loop
/* The starting point of the loop will be (str.length - 1) which corresponds to the 
       last character of the string, "o"
       As long as i is greater than or equals 0, the loop will go on
       We decrement i after each iteration */
/* Here hello's length equals 5
        For each iteration: i = str.length - 1 and newString = newString + str[i]
        First iteration:    i = 5 - 1 = 4,         newString = "" + "o" = "o"
        Second iteration:   i = 4 - 1 = 3,         newString = "o" + "l" = "ol"
        Third iteration:    i = 3 - 1 = 2,         newString = "ol" + "l" = "oll"
        Fourth iteration:   i = 2 - 1 = 1,         newString = "oll" + "e" = "olle"
        Fifth iteration:    i = 1 - 1 = 0,         newString = "olle" + "h" = "olleh"
    End of the FOR Loop*/
// Step 3. Return the reversed string

function reverseString(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}
// console.log(reverseString("hello"));

//*Method 3 Reverse a String With Recursion
function reverseString(str) {
  //This is the terminal case that will end the recursion
  if (str === "") {
    return "";
  } else {
    return reverseString(str.substr(1)) + str.charAt(0);
  }
}
// console.log(reverseString("hello"));

//Create a function that takes in a string
//Alert if the string is a palindrome or not

//* Example 1: Check Palindrome Using for Loop

function checkPalidrome(str) {
  //find the length of a string
  const len = str.length;

  //loop through half of the string
  for (let i = 0; i < len / 2; i++) {
    //check if first and last string are same
    if (string[i] !== string[len - 1 - i]) {
      return "Its not a palindrome";
    } else {
      return "Its a palindrome";
    }
  }
}
const string = prompt("Enter a string: ");
const value = checkPalidrome(string);
// console.log(value);

//* Example 2: Check Palindrome using built-in Functions
function checkPalindrome(str) {
  //convert string into an array
  const arrayValues = string.split("");
  //reverse the array values
  const reverseArrayValues = arrayValues.reverse();
  //convert array to string
  const reversestring = reverseArrayValues.join("");
  if (string === reverseString) {
    console.log("It is a palindrome");
  } else {
    console.log("It is not a palindrome");
  }
}
const string = prompt("Enter a string: ");
console.log(checkPalidrome(string));

// * The above lines can be reduced further like so:
const reverseString = string.split("").reverse().join("");
