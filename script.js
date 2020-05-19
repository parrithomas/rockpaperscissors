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
        window.alert('Error! Please choose rock, paper or scissors');
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
            computerScore +=1;
            return "You lose! Paper beats rock.";
        } else {
            playerScore +=1;
            return "You win! Rock beats scissors!";
        }
    }

    if (playerSelection === 'paper'){
        if (computerSelection === 'scissors'){
            computerScore +=1;
            return 'You lose! Scissors beats paper.';
        } else {
            playerScore +=1;
            return 'You win! Paper beats rock!';
            }
        }

    if(playerSelection === 'scissors'){
        if (computerSelection === 'rock'){
            computerScore +=1;
            return 'You lose! Rock beats scissors.';
        } else {
            playerScore +=1;
            return 'You win! Scissors beats paper!';
        }
    }
}

let computerSelection = computerPlay(); // assign return of computerPlay() to a variable
let playerSelection = playerThrow('rock'); // takes player's choice and assigns to a variable 

// let playerSelection = playerThrow(prompt("Rock, paper or scissors?","")); // takes player's choice and assigns to a variable 
/*
// print result
console.log(`The player chose: ${playerSelection}`);
console.log(`The computer chose: ${computerSelection}`);
console.log(playRound(playerSelection, computerSelection));
console.log(`Player: ${playerScore} // Computer ${computerScore}`)
*/

function playMatch(){
    playerSelection = playerThrow(prompt("Rock, paper or scissors?",""));
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    console.log(`The player chose: ${playerSelection} // The computer chose: ${computerSelection}`);
    console.log(playRound(playerSelection, computerSelection));

    playerSelection = playerThrow(prompt("Rock, paper or scissors?",""));
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    console.log(`The player chose: ${playerSelection} // The computer chose: ${computerSelection}`);
    console.log(playRound(playerSelection, computerSelection));

    playerSelection = playerThrow(prompt("Rock, paper or scissors?",""));
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    console.log(`The player chose: ${playerSelection} // The computer chose: ${computerSelection}`);
    console.log(playRound(playerSelection, computerSelection));

    playerSelection = playerThrow(prompt("Rock, paper or scissors?",""));
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    console.log(`The player chose: ${playerSelection} // The computer chose: ${computerSelection}`);
    console.log(playRound(playerSelection, computerSelection));

    playerSelection = playerThrow(prompt("Rock, paper or scissors?",""));
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    console.log(`The player chose: ${playerSelection} // The computer chose: ${computerSelection}`);
    console.log(playRound(playerSelection, computerSelection));

    console.log(`Player: ${playerScore} // Computer ${computerScore}`)
}

playMatch();

