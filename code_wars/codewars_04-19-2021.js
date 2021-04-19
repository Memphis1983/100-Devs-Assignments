Challenge: Remove exclamation marks

Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

Solution: 

function removeExclamationMarks(s) {
  var arr =s.split("");
  arr = arr.filter(function(e){
        return e !== "!";
    })
    return arr.join("");
}