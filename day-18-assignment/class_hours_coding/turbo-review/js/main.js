// *Variables*
// *Declare a variable and assign it to your fav drink as a string.
// *Make sure there is no whitespace on either side of the string, and print the value to the console
let favDrink = "  Whateva";
favDrink = favDrink.trim();
console.log(favDrink);

// *Declare a variable, assign it a string of multiple words,
//*and check to see if one of the words is "apple".

let quote = "car rainbow apple";
// *first method will give the index number
console.log(quote.search("apple"));

//*second method with conditionals, we customize with an yes or no
if (quote.search("apple") !== -1) {
  console.log("yes");
} else {
  console.log("no");
}
//*third method we split the words and check everyword for the the value which returns true/false
let word = quote.split(" ").includes("apple");
console.log(word);

// *Functions*
// *Create a function that returns rock, paper, or scissors as randomly as possible

function rockPaperScissors() {
  let random = Math.random();
  if (random < 0.33) {
    return "Rock";
  } else if (random < 0.66) {
    return "Paper";
  } else {
    return "Scissors";
  }
}
// rockPaperScissors();

// *Conditionals*
//*Create a function that takes in a choice (rock, paper, or scissors) and
//*determines if they won a game of rock paper scissors against a bot using the above function

function checkWin(choice) {
  let botChoice = rockPaperScissors();
  if (
    (choice === "Rock" && botChoice === "Scissors") ||
    (choice === "Paper" && botChoice === "Rock") ||
    (choice === "Scissors" && botchoice === "Paper")
  ) {
    console.log("You won");
  } else if (choice === botChoice) {
    console.log("You tied");
  } else {
    console.log("You lost");
  }
}
checkWin("Paper");

//*Loops*
//*Create a function that takes an array of choices. Play the game
//*x times where x is the number of choices in the array. Print the results of each game to the console.

function playGame(arr) {
  arr.forEach((choice) => {
    checkWin(choice);
  });
}
playGame(["rock", "paper", "paper"]);
