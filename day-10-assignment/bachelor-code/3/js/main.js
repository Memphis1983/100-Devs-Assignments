const contestants = document.querySelectorAll("#claire, #nikki");

Array.from(contestants).forEach((element) =>
  element.addEventListener("click", checkForRose)
);

function checkForRose(click) {
  if (click.target.classList.contains(/*INSERTCODE*/)) {
    document.querySelector("#nikki").classList.toggle(/*INSERTCODE*/);
  } else {                                    
    alert("Wrong!");                          
  }                                           
}                                             
                                              