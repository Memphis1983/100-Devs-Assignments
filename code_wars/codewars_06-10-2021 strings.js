Challenge - repeatIt

Create a function that takes a string and an integer (n).

The function should return a string that repeats the input string n number of times.

If anything other than a string is passed in you should return "Not a string"

Example
"Hi", 2 --> "HiHi"
1234, 5 --> "Not a string"


Solution : 

var repeatIt = function(str, n) {
  var output = '';
  if (typeof(str) !== 'string') {
    return "Not a string";
  }
  for (var i = 0; i<n; i++) {
    output += str;
  }

  return output;
}