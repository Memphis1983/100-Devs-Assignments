//Challenge - Polish alphabet

There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

Your task is to change the letters with diacritics:

ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z
and print out the string without the use of the Polish letters.

For example:

"Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"

Solution 1: 

function correctPolishLetters (string) {
  var stringArr = string.split("")
  for (var i = 0; i<stringArr.length; i++){
    switch (stringArr[i]){
        case "ą":
        stringArr[i] = "a";
        break;
        case "ć":
        stringArr[i] = "c";
        break;
        case "ę":
        stringArr[i] = "e";
        break;
        case "ł":
        stringArr[i] = "l";
        break;
        case "ń":
        stringArr[i] = "n";
        break;
        case "ó":
        stringArr[i] = "o";
        break;
        case "ś":
        stringArr[i] = "s";
        break;
        case "ź":
        stringArr[i] = "z";
        break;
        case "ż":
        stringArr[i] = "z";
        break;
        default:
        stringArr[i];
    }
  }
  return stringArr.join("");
}

Solution 2: 

var polishLetters = {
    "ą": "a",
    "ć": "c",
    "ę": "e",
    "ł": "l",
    "ń": "n",
    "ó": "o",
    "ś": "s",
    "ź": "z",
    "ż": "z",
};

function correctPolishLetters (string) {
  return string.split('').map((c) => polishLetters[c] || c).join("");
}