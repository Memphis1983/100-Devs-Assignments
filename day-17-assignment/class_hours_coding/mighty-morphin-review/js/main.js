// *Variables*
// Declare a variable, reassign it to your fav holiday,
//make sure it is in all caps, and print the value to the console

let favHoliday = "Winter";
favHoliday = favHoliday.toUpperCase();
// console.log(favHoliday);

//Declare a variable, assign it a string, alert the last three characters
//in the string (Use your google-fu and the MDN)

let string = "Javascript";
let sub = string.substr(-3);
// console.log(string.slice(-3)); // or this
// console.log(sub);

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100.
// Alert the absolute value of the difference. Call the function.

function fiveNumbersSub(n1, n2, n3, n4, n5) {
  let difference = 100 - n1 - n2 - n3 - n4 - n5;
  console.log(Math.abs(difference));
}
// fiveNumbersSub(10, 5, 3, 6, 7);

// Create a function that takes in 3 numbers. Console log lowest and highest values.
// Call the function.

function lowestAndHighestNum(n1, n2, n3) {
  console.log(
    `The lowest is, ${Math.min(n1, n2, n3)} and the highest is, ${Math.max(
      n1,
      n2,
      n3
    )}`
  );
}
// lowestAndHighestNum(33, 55, 15);

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible.
// Call the function.

function headsOrTails() {
  //   let random = Math.random();
  //   if (random < 0.5) {
  //     return "heads";
  //   } else {
  //     return "tails";
  //   } // or
  return Math.random() < 0.5 ? "heads" : "tails";
}
// console.log(headsOrTails());

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails
// using the previous function x times where x is the number passed into the function.
//  Call the function.
function flipFlipFlipadelphia(num) {
  for (let i = 1; i <= num; i++) {
    let result = headsOrTails;
    console.log(result);
  }
}
flipFlipFlipadelphia(5);
