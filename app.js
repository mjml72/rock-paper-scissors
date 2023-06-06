const userScoreDisplay = document.getElementById("user-score");
const compScoreDisplay = document.getElementById("computer-score");
const userChoiceDisplay = document.getElementById("user-choice");
const compChoiceDisplay = document.getElementById("comp-choice");
const result = document.getElementById("result");
const btns = document.querySelectorAll(".btn");
const reset = document.getElementById("reset")
let userScore = 0;
let compScore = 0;
let userChoice, compChoice;
const choices = ["rock", "paper", "scissors"];

reset.addEventListener("click", ()=>{
    window.location.reload(true);
});


btns.forEach(element => {
    element.addEventListener("click", (event)=>{
        userChoice = event.target.id;
        userChoiceDisplay.textContent = `Your choice: ${userChoice.toUpperCase()}`;
        game(userChoice);
    })
});

function generateCompChoice() {
    compChoice = choices[Math.floor(Math.random() * 3)];
    compChoiceDisplay.textContent = `Comp choice: ${compChoice.toUpperCase()}`;
    return compChoice;
}

function game(userChoice) {
    compChoice = generateCompChoice();
    
    switch(userChoice + compChoice){
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            result.textContent = " You Win!";
            userScore ++;
            userScoreDisplay.textContent = userScore;
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
           result.textContent = " You Lose!";
           compScore ++;
           compScoreDisplay.textContent = compScore;
           break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            result.textContent = " It's Draw!";
    }
}

