let btns = document.querySelectorAll("button")
let output = document.querySelector(".output")
let winner = document.querySelector(".winner")
let instruction = document.querySelector("#instruction")

for(let t of btns)
{
    // console.log(t)
    // t.innerText
    t.addEventListener("click", ()=>performToss(t.innerText.trim()))
}


let userScore = 0
let computerScore = 0
function performToss(clickedButtonText)
{

    let userToss = clickedButtonText

    //internal toss

    let tossArr = ["Head", "Tail"]
    let randomIndex = parseInt(Math.random()*tossArr.length)
    let randomToss = tossArr[randomIndex]

    if(userToss===randomToss)
    { 
        userScore++
        winner.innerHTML = `User won as he selected ${userToss}`
    }
    else
    {   
        computerScore++
        winner.innerHTML = `Computer won as user selected ${userToss}`
    }

    output.innerHTML = `<p> UserScore: ${userScore} <br><br> ComputerScore: ${computerScore} </p>`
}