document.querySelector("#get-input").addEventListener("click", convert);

function convert() {
  const fahrenheit = document.querySelector("#user-input").value;
  const convertedValue = (Math.floor(fahrenheit - 32) * 5) / 9;
  document.querySelector("#show").innerText = `${Math.round(convertedValue)}`;
}
