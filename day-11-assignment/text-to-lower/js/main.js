//change paragraph to lowertext
                                          
//adding event listener to button         
document.querySelector("#button1").addEventListener("click", changeTextLower);

//document.querySelector("#button2").addEventListener("click", changeTextUpper);
                                          
// create lowercase function              
function changeTextLower() {              
  //get the input                         
  const para = document.querySelector("#text").innerText.toLowerCase();
  // display output                       
  document.querySelector("#text").innerText = para;
}                                         
                                          
//// create uppercase function              
//function changeTextUpper() {              
//  const para = document.querySelector("#text").innerText.toUpperCase();
//  document.querySelector("#text").innerText - para;
//}                                         
//                                          