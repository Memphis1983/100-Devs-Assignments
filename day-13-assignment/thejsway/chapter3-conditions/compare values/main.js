function compareValue(n1, n2) {
  n1 = Number(prompt("Enter the first number: "));
  n2 = Number(prompt("Enter the second number: "));
  if (n1 === n2) {
    alert("Both numbers are equal");
  } else if (n1 > n2) {
    alert("First number is greater");
  } else if (n1 < n2) {
    alert("Second number is greater");
  } else {             
    alert("Invalid input! Only numbers allowed");
  }                    
}                      
                       
compareValue();        
                       