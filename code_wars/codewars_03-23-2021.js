Challenge: Sort and Star

You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.

Solution: 


function twoSort(s) {
  let word = s.sort()[0];
  let result = "";
  for (var i = 0; i < word.length; i++) {
    result += word[i];
    if (i !== word.length - 1) {
      result += "***";
    }
  }
  return result;
}
