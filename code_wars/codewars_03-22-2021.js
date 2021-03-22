Challenge: Fake Binary

Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Solution: 

function fakeBin(str){
  let newString = "";
  for(let i = 0;i < str.length; i++){
    if (Number(str[i]) >= 5) {
      newString += "1"
    }
    else {
      newString += "0";
    }
  }
  return newString;
}