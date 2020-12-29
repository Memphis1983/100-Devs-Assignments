//Improved Hello 
function greetings(fname, lname) {
	fname = prompt("Enter first name: ").toLowerCase();
  lname = prompt("Enter last name: ").toLowerCase();
  const caps1 = fname.charAt(0).toUpperCase() + fname.slice(1);
  const caps2 = lname.charAt(0).toUpperCase() + lname.slice(1);
  alert(`Hello, ${caps1} ${caps2}!`)
}

greetings();