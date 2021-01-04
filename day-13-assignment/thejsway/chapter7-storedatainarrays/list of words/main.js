//Write a program that asks the user for a word until the user types "stop".
// The program then shows each of these words, except "stop".

//set a empty array
const words = [];   
                    
//while loop counter
let count = 1;      
while (count <= 5) {
  const input = prompt("Enter any word:");
  words.push(input);
  count++;          
  if (input === "stop") {
    alert(words);   
  }                 
  console.log(words);
}                   
                    