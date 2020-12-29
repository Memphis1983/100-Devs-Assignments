//Write a program that accepts a month number (between 1 and 12),
// then shows the number of days of that month. Leap years are
// excluded. Incorrect inputs must be taken into account.

function daysInAMonth() {
  const month = Number(prompt("Please enter the month number: "));
  if (month < 1 || month > 12) {
    alert("Enter the correct number of the month! Dammit");
  } else if (month === 1) {
    alert("January has 31 days");
  } else if (month === 2) {
    alert("February has 29 days");
  } else if (month === 3) {
    alert("March has 31 days");
  } else if (month === 4) {
    alert("April has 30 days");
  } else if (month === 5) {
    alert("May has 31 days");
  } else if (month === 6) {
    alert("June has 30 days");
  } else if (month === 7) {
    alert("July has 31 days");
  } else if (month === 8) {
    alert("August has 31 days");
  } else if (month === 9) {
    alert("September has 30 days");
  } else if (month === 10) {
    alert("October has 30 days");
  } else if (month === 11) {
    alert("November has 30 days");
  } else if (month === 12) {
    alert("December has 31 days");
  } else {
    alert("Invalid input! Enter a number or go away!");
  }        
}          
           
daysInAMonth();
           
// Using swtich Statements
function monthCheck() {
  const month = Number(prompt("Enter the month number: "));
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      alert("Has 31 days");
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      alert("Has 30 days");
      break;
    case 2:
      alert("Has 29 days");
      break;
    default:
      alert("Enter a valid input dammit!");
  }        
}          
           
monthCheck();
           