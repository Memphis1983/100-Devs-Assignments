document.querySelector("#button").addEventListener("click", sumTotal);

function sumTotal() {
  let val1 = document.querySelector("#val1").value;
  let val2 = document.querySelector("#val2").value;
  let sum = Number(val1) + Number(val2);
  document.querySelector("#sum").value = sum;
  vatCalc(sum);
}
function vatCalc(sum) {
  var sumVat = 0.2;
  let vat = sumVat * sum;
  document.querySelector("#vat").value = vat;
}
 