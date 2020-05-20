function computerPlay() {
   let randomNumber = Math.floor(Math.random() * 3); // create a random number between 0 and 3
   switch (randomNumber){ // swtich statement to return 0-3 to either rock paper scissors
        case 0:
           return 'rock'
        case 1:
            return 'paper'
        case 2:
            return 'scissors'
    }
}

// takes the player selection, makes it all lower case and check that is meets the rock/paper/scissors requirements
function playerThrow(playerChoice) {
    playerChoice = playerChoice.toLowerCase();

    if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors') {
        return playerChoice
    } else {
        console.log('Error! Please choose rock, paper or scissors');
    }
}

let playerScore = 0; // set the player score
let computerScore = 0; // set the computer score

function playRound(playerSelection, computerSelection){
    
    // check to see if the game is a tie
    if (playerSelection === computerSelection){
        return 'The game is a tie';
    }

    if (playerSelection === 'rock'){
        if (computerSelection === 'paper'){
            computerScore++;
            return "Paper beats rock. You lose! ";
        } else {
            playerScore++;
            return "Rock beats scissors! You win! ";
        }
    }

    if (playerSelection === 'paper'){
        if (computerSelection === 'scissors'){
            computerScore++;
            return 'Scissors beats paper. You lose!';
        } else {
            playerScore++;
            return 'Paper beats rock! You win!';
            }
        }

    if(playerSelection === 'scissors'){
        if (computerSelection === 'rock'){
            computerScore++;
            return 'Rock beats scissors. You lose!';
        } else {
            playerScore++;
            return 'Scissors beats paper! You win!';
        }
    }
}

function game(){
    for (let noOfRounds = 1; noOfRounds<6; noOfRounds++) { // loop through five rounds
        console.log('Round: ' + noOfRounds + " ... FIGHT!"); // display round number

        let playerSelection = playerThrow(prompt("Rock, paper or scissors?","")); // player select
        let computerSelection = computerPlay(); // computer selects

        console.log(`You threw a ${playerSelection}.  The computer threw a ${computerSelection}`) // displays selections
        let round_result = playRound(playerSelection, computerSelection); // plays game and returns outcome to a variable
        console.log(round_result); // display game outcome now stored in variable
        let currentScore = (`Player 1: ${playerScore} // Computer: ${computerScore}`) ;
        console.log(currentScore) // display current score
        
    }

    
    console.log(`Final Scores... Player 1: ${playerScore} // Computer: ${computerScore}`);
    if (playerScore === computerScore) {
        console.log('The game is a tie. If nobody wins, I guess everyone is a loser.')
    } else if (playerScore > computerScore) {
        console.log('You won!');
    } else {
        console.log('You lost. Try harder.');
    }
}

game();