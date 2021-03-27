

const buttons = document.querySelectorAll("buttons")
buttons.forEach(item => {
    item.addEventListener("click", coinFlip)
})


function coinFlip() {
    function flip() {
       const random = Math.round(Math.random() * 2) + 1;
       return random;
       console.log(random)
    }
    let result;
    if (result === userChoice) {
        if(result === "heads") {
            alert("You chose heads and the flip was heads... You Win!")
        }else {
            alert("You chose tails and the flip was tails... You Win!")
        }
    }else {
        if (result === "heads") {
            alert("The flip was heads and you chose tails... You lost!")
        }else {
            alert("The flip was tails and you chose heads... You lost!")
        }
    }
}









