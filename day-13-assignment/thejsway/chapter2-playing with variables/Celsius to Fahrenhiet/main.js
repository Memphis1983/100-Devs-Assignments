document.querySelector("#getInput").addEventListener("click", convert);

function convert() {
  let celsius = document.querySelector("#userInput").value;
  const convertedValue = Math.floor((celsius * 9) / 5) + 32;
  document.querySelector("#display").innerText = `${Math.round(
    convertedValue
  )}`;            
}                 
                  