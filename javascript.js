console.log('Hello World!');

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();
let humanScore = 0;
let computerScore = 0;


function getComputerChoice () {
    const number = Math.floor(Math.random() * 3);
    if (number === 0) {
        return 'Rock';
    } else if (number === 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
};

function getHumanChoice() {
    let promptText = prompt('Rock, Paper, or Scissors?');  
    return promptText;
};
// function playRound (, computerChoice) {
//          (humanChoice === 'Rock')
// }
console.log(compChoice);
console.log(humanChoice);



