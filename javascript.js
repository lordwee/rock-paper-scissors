let result = document.querySelector(".result");
let playerScore = document.querySelector(".playerScore");
let robotScore = document.querySelector(".computerScore");
let humanScore = 0;
let computerScore = 0;
let humanChoice = "";



    
<<<<<<< HEAD
    // console.log("Fourth Round:");
    // playRound(getHumanChoice(),getComputerChoice());
    // console.log("Your score: " + humanScore +" Computer: " + computerScore);
    
    // console.log("Fifth Round:");
    // playRound(getHumanChoice(),getComputerChoice());
    // console.log("Your score: " + humanScore +" Computer: " + computerScore);
    
    
    
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
=======
    function winner() {
        if (humanScore === 5) {
            result.textContent = "you win";
            
        } else if (computerScore === 5) {
            result.textContent = "you lose";
            
>>>>>>> rps-ui
        }
    }

    function getComputerChoice() {
            const number = Math.floor(Math.random() * 3);
            if (number === 0) {
                return 'rock';
            } else if (number === 1) {
                return 'paper';
            } else {
                return 'scissors';
            }
        };
    

    function playRound(humanChoice, computerChoice) {
            
            if (humanChoice === 'rock' && computerChoice === 'scissors') {
              
                result.textContent = "rock beats scissors";
                humanScore = humanScore + 1;

            } else if (humanChoice === 'paper' && computerChoice === 'rock') {
            
                result.textContent = "paper beats rock";
                humanScore = humanScore + 1;

            } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
            
                result.textContent = "scissors beat paper";
                humanScore = humanScore + 1;
                        
            } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
            
                result.textContent = "rock beats scissors";
                computerScore = computerScore + 1;

            } else if (humanChoice === 'rock' && computerChoice === 'paper') {
            
                result.textContent = "paper beats rock";
                computerScore = computerScore + 1;

            } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
            
                result.textContent = "scissors beat paper";
                rcomputerScore = computerScore + 1;

            } else {
                result.textContent = `No points! Both chosen ${humanChoice}`;
            }
            console.log(computerScore, humanScore);
            winner();
    }
        
    let choices = document.querySelector(".buttons");
        choices.addEventListener("click", (event) => {
                
                target = event.target;
                switch (target.id) {
                    case 'rock':
                        humanChoice = 'rock';
                        playRound(humanChoice, getComputerChoice());
                        robotScore.textContent = computerScore;
                        playerScore.textContent = humanScore;
                        break;
                        
                    case 'paper':
                        humanChoice = 'paper';
                        playRound(humanChoice, getComputerChoice());
                        robotScore.textContent = computerScore;
                        playerScore.textContent = humanScore;
                        break;
                        
                    case 'scissors':
                        humanChoice = 'scissors';
                        playRound(humanChoice, getComputerChoice());
                        robotScore.textContent = computerScore;
                        playerScore.textContent = humanScore;
                        break;
                        
                    
                }

            })


