Challenge - String repeat

Write a function called repeat_string which repeats the given string str exactly count times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"


Solution 1: 

function repeatStr (n, s) {
var str = "";
for(var i = 0; i < n; i++){
  str+=s;
  }
   return str;
}

Solution2: 

function repeatStr (n, s) {
  return s.repeat(n);
}