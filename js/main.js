/**
* This function take a random number and associate it to rock, paper or scissor
* and return that value as a string
*/
function computerPlay(){

    let ranInt = parseInt(Math.random() * 3);

    if (ranInt === 0) {
        return 'rock';
    } else if (ranInt == 1) {
        return 'paper';
    } else {
        return 'scissor';
    }
}

/**
* This function prompt the user for a value (rock, paper or scissor), validate
* it, normalize the input string and return the user choice
*/
function playerPlay(){
    let answer = '';

    do {
        answer = prompt('Choose rock, paper or scissor');
        answer = answer.toLowerCase().trim();

    } while (answer !== 'rock' && answer !== 'paper' && answer !== 'scissor');

    return answer;
}

/**
* This function normalize the inputs from player and computer,
* play a round of the game and return who win the round (or a tie).
* @param {string} playerSelection The play from player.
* @param {string} computerSelection The random play from computer
* Logic:    scissor > rock > paper
            paper < rock < scissor
            rock < scissor > paper
*/
function playRound(playerSelection, computerSelection){

    const player = playerSelection.toLowerCase().trim();
    const computer = computerSelection.toLowerCase().trim();

    if (player === computer) {
        return 'tie';
    }

    if (player > computer) {
        if (player === 'rock' || computer === 'rock') {
            return 'computer';
        } else {
            return 'player';
        }
    } else {
        if (player === 'rock' || computer === 'rock') {
            return 'player';
        } else {
            return 'computer';
        }
    }
}

/**
* This function play a match of five rounds, compute the winning of each round
* and display it. If there is a tie the round is repeated.
* After five round compute and displey the winner of the match.
*/
function game() {
    let playerWin = 0;
    let computerWin = 0;

    for (let i = 0; i < 5; i++) {

        const playerSelection = playerPlay();
        const computerSelection = computerPlay();

        const winner = playRound(playerSelection, computerSelection);

        if (winner === 'player') {
            playerWin++;
            console.log(`You Win the Round! Player: ${playerWin} - Computer: ${computerWin}`);
        } else if (winner === 'computer') {
            computerWin++;
            console.log(`You Lose the Round! Player: ${playerWin} - Computer: ${computerWin}`);
        } else {
            i--;
            console.log('It\'s a tie. Play again this round');
        }
    }

    // Display the final score
    if (playerWin > computerWin) {
        console.log(`You Win the Match! Final score: ${playerWin} for Player - ${computerWin} for Computer`);
    } else {
        console.log(`You Lose the Match! Final score: ${playerWin} for Player - ${computerWin} for Computer`);
    }
}

game();
