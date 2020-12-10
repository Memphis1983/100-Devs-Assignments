//Write your pseduo code first!
                                              
//click event (smurf)                         
                                              
document.querySelector("#get-input").addEventListener("click", convert);
                                              
function convert() {                          
  //get the value from the input              
  const celsius = document.querySelector("#user-input").value;
  //quick mafs convert it                     
  const convertedValue = celsius * 9 / 5 + 32;
                                              
  //display the value                         
  document.querySelector("#display").innerText = convertedValue;
}                                             
                                              