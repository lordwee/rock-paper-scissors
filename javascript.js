const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
let humanScore = 0;
let computerScore = 0;


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
    return promptText;
};

function playRound (humanChoice, computerChoice) {
        let winner;
         if (humanChoice === 'rock' && computerChoice === 'scissors') {
            humanScore++;
            return winner = "You win: Rock beats Scissors!! Your score: " + humanScore + " Computer's score: " + computerScore;
         } else if (humanChoice === 'paper' && computerChoice === 'rock') {
            humanScore++;
            return winner = "You win: Paper beats Rock!! Your score: " + humanScore + " Computer's score: " + computerScore;
         } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
            humanScore++;
            return winner = "You win: Scissors beats Paper!! Your score: " + humanScore + " Computer's score: " + computerScore;
         } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
            computerScore++;
            return winner = "You lose: Rock beats Scissors!! Your score: " + humanScore + " Computer's score: " + computerScore;
        } else if (humanChoice === 'rock' && computerChoice === 'paper') {
            computerScore++;
            return winner = "You lose: Paper beats Rock!! Your score: " + humanScore + " Computer's score: " + computerScore;
        } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
            computerScore++;
            return winner = "You lose: Scissors beats paper!! Your score: " + humanScore + " Computer's score: " + computerScore;          
        } else {
            return winner = "No winner! Both chosen: " + humanSelection
        }
};

console.log(playRound(humanSelection, computerSelection));
console.log("You: " + humanSelection + " Computer: " + computerSelection);



