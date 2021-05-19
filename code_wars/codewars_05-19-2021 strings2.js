Challenge: Reversed Words

Complete the solution so that it reverses all of the words within the string passed in.

Example:

"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

Solution 1: 

function reverseWords(str){
  return str.split(' ').reverse().join(' ');
}

Solution 2: 

function reverseWords(str){
  var reverse = [];
  var words = str.split(" ");
  for(let i=words.length-1; i>=0; i--){
    reverse.push(words[i]);
    
  }
  return reverse.join(" ")
}

Solution 3: 

function reverseWords(str){
  let count_letters= 1;
  let new_string = "";
  for(let i = str.length-1; i >=0 ;i--){
    if(str[i]===' '|| i==0){
      if(i!=0)
        new_string+= str.substr(i+1,count_letters-1) + ' ';
      else
        new_string+= str.substr(i,count_letters);
      console.log(new_string);
      count_letters=1;
    }else
      count_letters++;
  }
  console.log(new_string);
  return new_string;
}