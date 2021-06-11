Challenge - Contamination #1 -String-

Create a function that takes a string and an integer (n).

The function should return a string that repeats the input string n number of times.

If anything other than a string is passed in you should return "Not a string"

Example
"Hi", 2 --> "HiHi"
1234, 5 --> "Not a string"


Solution 1: 

function contamination(text, char){
  // Code here ;)
  if (text === "" || char === "") {
    return "";
  }else {
   return text.split("").map(e => char).join(""); 
  }
}

Solution 2: One liner

function contamination(text, char){
  return text !== "" && char !== "" ? char.repeat(text.length) : "";
}

