const playRockPaperScissors = (playerChoice) => {
// 1. Computer makes a choice of rock, paper or scissors. - DONE
//      - make a list of choices
const choices = ["rock","scissors","paper"]
//      - Generate a random number between 0-2
const random = Math.floor(Math.random() * 3)
//      - Use the random number to select the computers choice
const computerChoice = choices[random]

let result = ''
// 2. Compare the players choice with the computers choice.
//     - Player & Computer choice is the same: Draw
if (playerChoice === computerChoice) {
result = `It's a draw! Computer & Player both choose ${computerChoice}!`
}
//     - Player Wins

if ((playerChoice === 'rock' && computerChoice === 'scissors') || 
(playerChoice === 'paper' && computerChoice === 'rock') || 
(playerChoice === 'scissors' && computerChoice === 'paper')) {
result = `Congratualtions! ${playerChoice} beats ${computerChoice}`
}

//     - Computer Wins
if ((computerChoice === 'rock' && playerChoice === 'scissors') ||
 (computerChoice === 'paper' && playerChoice === 'rock') ||
 (computerChoice === 'scissors' && playerChoice === 'paper')
) {
result = `Better Luck Next Time! ${computerChoice} beats ${playerChoice}`
}

// 3. Tell the player who the winner is.
return result
}


console.log(playRockPaperScissors('rock'))