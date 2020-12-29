//take a day from the user

function followingDay(day) {
  day = prompt("Enter the day: ").toLowerCase();
  //show name of the following day
  if (day === "monday") {
    alert("tuesday");
  } else if (day === "tuesday") {
    alert("wednesday");
  } else if (day === "wednesday") {
    alert("thursday");
  } else if (day === "thursday") {
    alert("friday");
  } else if (day === "friday") {
    alert("saturday");
  } else if (day === "saturday") {
    alert("sunday");
  } else if (day === "sunday") {
    alert("monday");
  } else {
    //incorrect inputs must be taken into account
    alert("Not a valid input");
  }       
}         
          
followingDay();
          
//Using switch statements
          
function followDay(day) {
  day = prompt("Enter day: ").toLowerCase();
  switch (day) {
    case "sunday":
      alert("monday");
      break;
    case "monday":
      alert("tuesday");
      break;
    case "tuesday":     
      alert("wednesday");
      break;            
    case "wednesday":   
      alert("thursday");
      break;            
    case "thursday":    
      alert("friday");  
      break;            
    case "friday":      
      alert("saturday");
      break;            
    case "saturday":    
      alert("sunday");  
      break;            
    default:            
      alert("Not a valid input");
  }                     
}                       
                        
followDay();            
                        