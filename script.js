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

function getHumanChoice() {
    return prompt('Enter your option:');
}

function playRound(humanChoice, computerChoice) {
    
}

console.log(getComputerChoice())
console.log(getHumanChoice())