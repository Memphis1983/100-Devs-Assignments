// create a function that takes in a number and a word. If the length of 
// the word multiplied by the number passed into the function is greater than 100,
// alert "WINNER"!

function multiWordLength(num,word){
  if( word.length * num > 100 ){    
    alert('Winner!')                
  }                                 
}  

multiWordLength(50,"hello")  

