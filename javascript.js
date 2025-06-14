playGame();

function getComputerChoice () {
    const number = Math.floor(Math.random() * 3);
    if (number === 0) {
        return 'rock';
    } else if (number === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
};

function getHumanChoice() {
    let promptText = prompt('Rock, Paper, or Scissors?');  
    return promptText.toLowerCase();
};

function playGame() {
let humanScore = 0;
let computerScore = 0;

    console.log("First Round:");
    playRound(getHumanChoice(),getComputerChoice());
    console.log("Your score: " + humanScore +" Computer: " + computerScore);
    
    // console.log("Second Round:");
    // playRound(getHumanChoice(),getComputerChoice());
    // console.log("Your score: " + humanScore +" Computer: " + computerScore);

    // console.log("Third Round:");
    // playRound(getHumanChoice(),getComputerChoice());
    // console.log("Your score: " + humanScore +" Computer: " + computerScore);
    
    // console.log("Fourth Round:");
    // playRound(getHumanChoice(),getComputerChoice());
    // console.log("Your score: " + humanScore +" Computer: " + computerScore);
    
    // console.log("Fifth Round:");
    // playRound(getHumanChoice(),getComputerChoice());
    // console.log("Your score: " + humanScore +" Computer: " + computerScore);
    
   
    let mamasita = "mamasita"
    if (humanScore > computerScore) {
        console.log("you win");
    } else if (computerScore > humanScore) {
        console.log("you lose")
    } else {
        console.log("Draw")
    };
        
        function playRound (humanChoice, computerChoice) {
                
                if (humanChoice === 'rock' && computerChoice === 'scissors') {
                    humanScore = humanScore + 1;
                    return console.log("rock beats scissors");
                } else if (humanChoice === 'paper' && computerChoice === 'rock') {
                    humanScore = humanScore + 1;
                    return console.log("paper beats rock");
                } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
                    humanScore = humanScore + 1;
                    return console.log("scissors beat paper");
                    
                } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
                    computerScore = computerScore + 1;
                    return console.log("rock beats scissors");
                } else if (humanChoice === 'rock' && computerChoice === 'paper') {
                    computerScore = computerScore + 1;
                    return console.log("paper beats rock");
                } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
                    computerScore = computerScore + 1;
                    return console.log("scissors beat paper");
                } else {
                    return console.log("No winner! Both chosen " + humanChoice);
                }
        }


}



