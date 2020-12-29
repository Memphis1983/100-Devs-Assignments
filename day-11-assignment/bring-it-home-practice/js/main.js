// *Variables*
// Create a variable and console log the value         
const animal = "dog";                                  
console.log(animal);                                   
                                                       
// Create a variable, add 10 to it, and alert the value
let num = 10;                                          
num = num + 10;                                        
alert(num);                                            
                                                                                         
// *Functions*                                                                           
// Create a function that subtracts 4 numbers and alerts the difference                  
                                                                                         
Function subFour(num1,num2,num3,num4)                                                    
alert(num1-num2-num3-num4);                                                              
                                                                                         
subFour(55,58,85,87)                                                                     
// Create a function that divides one number by another and returns the remainder        
function divideNum(num1, num2) {                                                         
  return num1 % num2;                                                                                                       
}                                                                                        
                                                                                         
console.log(divideNum(20, 8))                                                                          
                                                                                         
// *Conditionals*                                                                        
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addNum(num1, num2) {                                                            
  let sum = num1 + num2;                                                                     
  if (sum > 50) {                                                                        
    alert("JUMANJI!");                                                                   
  }                                                                                      
}                                                                                        
addNum(20, 40);                                                                          
                                                                                         
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
                                                                                         
function multiplyNum(num1, num2, num3) {                                                 
  sum = num1 * num2 * num3;                                                              
  if (sum % 3 === 0) {                                                                   
    alert("ZEBRA");                                                                      
  }                                                                                      
}                                                                                        
multiplyNum();                                                                           
                                                                                         