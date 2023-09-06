const userScoreDisplay = document.getElementById("user-score");
const computerScoreDisplay = document.getElementById("computer-score");
const userChoiceDisplay = document.getElementById("user-choice");
const computerChoiceDisplay = document.getElementById("comp-choice");
const result = document.getElementById("result");
const btns = document.querySelectorAll(".btn");
const reset = document.getElementById("reset")
let userScore = 0;
let compScore = 0;
let userChoice, computerChoice;
const choices = ["rock", "paper", "scissors"];

reset.addEventListener("click", ()=>{
    location.reload(true);
});


btns.forEach(element => {
    element.addEventListener("click", (event)=>{
        userChoice = event.target.id;
        userChoiceDisplay.textContent = `${userChoice.toUpperCase()}`;
        game(userChoice);
    })
});

function generateCpuChoice() {
    computerChoice = choices[Math.floor(Math.random() * 3)];
    computerChoiceDisplay.textContent = `${computerChoice.toUpperCase()}`;
    return computerChoice;
}

function game(userChoice) {
    computerChoice = generateCpuChoice();
    
    switch(userChoice + computerChoice){
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
           computerScoreDisplay.textContent = compScore;
           break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            result.textContent = " It's Draw!";
    }
}

