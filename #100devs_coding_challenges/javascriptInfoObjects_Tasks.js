//Write the code, one line for each action:

// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.

let user = {
  name: "John",
  surname: "Smith",
};
user.name = "Pete";
// console.log(user.name)
delete user.name;

// --------------------------------
// Write the function isEmpty(obj) which returns true if the object
// has no properties, false otherwise.
function isEmpty(obj) {
  for (let key in obj) {
    // if the loop has started, there is a property
    return false;
  }
  return true;
}

// ----------------------------------------
// We have an object storing salaries of our team:
// Write the code to sum all salaries and store
// in the variable sum. Should be 390 in the example
// above.If salaries is empty, then the result must
// be 0.

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}
console.log(sum);

// -------------------------------------------
// Create a function multiplyNumeric(obj) 
// that multiplies all numeric property 
// values of obj by 2.
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

 function multiplyNumeric(menu) {
	let sum = 0;
    for (let element in menu) {
	if(menu.hasOwnProperty( element ) ) {
		sum *= parseFloat( menu[element] );	
	}
    }
     return sum;
}

console.log(menu);
