//Arrays

//Create and array of tv shows. Loop through and print each show to the console

// const tvShows = ["Bachulor", "Blah", "Rangers"];
// tvShows.forEach((show) => console.log(show));

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// function onlyEvens(arr) {
//   return arr.filter((num) => num % 2 === 0);
// }
// let newArr = numbers.filter((x) => x % 2 === 0); /or this
// console.log(onlyEvens(numbers));

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number

function secondLowestAndHighest(arr) {
  let sorted = arr.sort((a, b) => a - b);
  console.log(sorted[1] + sorted[sorted.length - 2]);
}
secondLowestAndHighest([2, 3, 4, 6, 7, 8]);
