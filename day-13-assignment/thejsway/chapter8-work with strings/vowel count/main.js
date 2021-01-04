const input = prompt("Enter a word:");
for (let i = 0; i < input.length; i++) {
  let len = input.length;
  let lower = input.toLowerCase();
  let upper = input.toUpperCase();
  alert(
    `The word's length is ${len}\n In Lowercase: ${lower}\n In Uppercase: ${upper}\n Vowel count: ${numberOfVowels(
      input
    )}`
  );
}
 
function numberOfVowels(string) {
  let listOfVowels = "aAeEiIoOuU";
  let vowelsCount = 0;
  for (let i = 0; i < string.length; i++) {
    if (listOfVowels.indexOf(string[i]) !== -1) {
      vowelsCount += 1;
    }
  }
  return vowelsCount;
}
 