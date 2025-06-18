let result = document.querySelector(".result");
let playerScore = document.querySelector(".playerScore");
let robotScore = document.querySelector(".computerScore");
let humanScore = 0;
let computerScore = 0;
let humanChoice = "";



    
    function winner() {
        if (humanScore === 5) {
            result.textContent = "you win";
            
        } else if (computerScore === 5) {
            result.textContent = "you lose";
            
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


