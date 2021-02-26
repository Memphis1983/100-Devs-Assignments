//Challenge - Create a function that returns the total of a meal including tip and tax. You should not tip on the tax.

//You will be given the subtotal, the tax as a percentage and the tip as a percentage. Please round your result to two decimal places.


function calculate_total(subtotal, tax, tip) {
var result = subtotal + (subtotal * tax / 100) + (subtotal * tip / 100);
var total = Number(result.toFixed(2));
return total;
}