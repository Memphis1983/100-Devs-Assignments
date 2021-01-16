//Create an array of movie titles. Loop through the array and each element to the h2.

let movies = ["Pursuit of happiness", "Mask", "Titanic", "The notebook"];

movies.forEach(movie => {
  document.querySelector("h2").innerText += movie;
});



//Create an array of numbers. Loop through the array and three to each number and replace the old number.

let numbers = [2, 4, 6, 6];
numbers.forEach((item, i) => {
  numbers[i] = item + 3;
});



//Find the average of all the numbers from question three
let sum = 0;
for (let i = 0; i < num.length; i++) {
  sum += nums[i];
}
console.log(sum / num.length);
