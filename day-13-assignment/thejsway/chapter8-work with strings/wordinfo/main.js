// Write a program that asks you for a word then shows its length, lowercase, and uppercase values.

// const word = [];
// let count = 1;
// while (count <= 1) {
//   let input = prompt("Please enter a word: ");
//   word.push(input);
//   count++;
//   for (let i = 0; i < word[0].length; i++) {
//     word[i].toLowerCase();
//     word[i].toUpperCase();
//     console.log(word[i]);
//   }
// }
   
 const input = prompt("Enter a word:");
	for (let i = 0; i < input.length; i++) {
  	let len = input.length;
    let lower = input.toLowerCase();
    let upper = input.toUpperCase();
   alert(`The word's length is ${len}\n In lowercase: ${lower}\n In uppercase: ${upper}`);
  }