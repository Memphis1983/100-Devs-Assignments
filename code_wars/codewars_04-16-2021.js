Challenge:Substituting Variables Into Strings: Padded Numbers

Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

Example:

solution(5) // should return "Value is 00005"

Solution: 

function solution(value){
  return "Value is 00000".slice(0, - value.toString().length) + value;
}

Solution 2: 

function solution(value) {
  //Example 1
  var result = 'Value is 00000'.replace(new RegExp('\\d{' + value.toString().length + '}$'), value);
  //Example 2
  result = value.toString().replace(/^/, 'Value is ' + '00000'.slice(value.toString().length));
  //Example 3
  result = 'Value is ' + '00000'.slice(value.toString().length) + value;
  //Example 4
  result = 'Value is ' + ('00000' + value).slice(-5);
  return result;
}