//const values = [3, 11, 7, 2, 9, 10];
const numArray = [];
let value = 1;
while (value <= 6) {
  const input = Number(prompt("Enter a number: "));
  numArray.push(input);
  value++;   
}            
             
function sumArr(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }          
  alert(sum);
}            
             
//i want to sum the array twice to see if its the same
sumArr(numArray);
sumArr(numArray);
             