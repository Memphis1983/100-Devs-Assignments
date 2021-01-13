const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const result = document.querySelector("#result");
const operators = document.querySelector("#operators");

document.querySelector(".add").addEventListener("click", add);

function add() {
  let num1 = Number(document.querySelector("#num1").value);
  let num2 = Number(document.querySelector("#num2").value);
  let sum = num1 + num2;
  document.querySelector("#result").innerText = sum;
  document.querySelector("#num1").value = "";
  document.querySelector("#num2").value = "";
}

document.querySelector(".sub").addEventListener("click", sub);

function sub() {
  let num1 = Number(document.querySelector("#num1").value);
  let num2 = Number(document.querySelector("#num2").value);
  let sum = num1 - num2;
  document.querySelector("#result").innerText = sum;
  document.querySelector("#num1").value = "";
  document.querySelector("#num2").value = "";
}

document.querySelector(".mul").addEventListener("click", multiply);

function multiply() {
  let num1 = Number(document.querySelector("#num1").value);
  let num2 = Number(document.querySelector("#num2").value);
  let sum = num1 * num2;
  document.querySelector("#result").innerText = sum;
  document.querySelector("#num1").value = "";
  document.querySelector("#num2").value = "";
}

document.querySelector(".div").addEventListener("click", divide);

function divide() {
  let num1 = Number(document.querySelector("#num1").value);
  let num2 = Number(document.querySelector("#num2").value);
  let sum = num1 / num2;
  document.querySelector("#result").innerText = sum;
  document.querySelector("#num1").value = "";
  document.querySelector("#num2").value = "";
}
