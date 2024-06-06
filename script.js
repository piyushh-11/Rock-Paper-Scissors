let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let value = Math.floor(Math.random() * 3);

    switch (value) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

let results = document.querySelector(".results")
let score = document.createElement("score");

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose! Paper beats Rock");
        computerScore++;
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win! Rock beats Scissors");
        humanScore++;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! Paper beats Rock");
        humanScore++;
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You lose! Scissors beats Paper");
        computerScore++;
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You lose! Rock beats Scissors");
        computerScore++;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! Scissors beats Paper");
        humanScore++;
    } else {
        console.log("Draw. You both chose " + computerChoice);
    }

    if (humanScore == 5) {
        score.textContent = "YOU WIN!";
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore == 5) {
        score.textContent = "YOU LOSE :(";
        humanScore = 0;
        computerScore = 0;
    } else {
        score.textContent = humanScore + " " + computerScore;
    }

    results.appendChild(score);
}

let rockButton = document.querySelector(".rock");
let paperButton = document.querySelector(".paper");
let scissorsButton = document.querySelector(".scissors");

rockButton.addEventListener("click", () => {
    playRound("rock", getComputerChoice())
});
paperButton.addEventListener("click", () => {
    playRound("paper", getComputerChoice())
});
scissorsButton.addEventListener("click", () => {
    playRound("scissors", getComputerChoice())
});