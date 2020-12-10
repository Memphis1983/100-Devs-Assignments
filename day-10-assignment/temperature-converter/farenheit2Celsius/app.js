//Write your pseduo code first!

//click event (smurf)
document.querySelector("#get-input").addEventListener("click", convert);
     
function convert() {
  //get the value from the input
  const fahrenheit = document.querySelector("#user-input").value;
  //quick mafs convert it
  //   const convertedValue = ((fahrenheit - 32) * 5) / 9;
  const convertedValue = (Math.floor(fahrenheit - 32) * 5) / 9;
  //display the value
  document.querySelector("#display").innerText = `${Math.round(
    convertedValue
  )}`;
}    
     