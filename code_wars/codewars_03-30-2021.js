Challenge: FIXME: Replace all dots

The code provided is supposed replace all the dots . in the specified String str with dashes -

But it's not working properly.

Task
Fix the bug so we can all go home early.

Notes
String str will never be null.

Solution: 

var replaceDots = function(str) {
  let replacedStr = "";
  for (let i = 0; i < str.length; i++) {
    replacedStr += (str[i] !== ".") ? str[i] : "-";
  }
  return replacedStr
}