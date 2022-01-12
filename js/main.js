// Random computer play
function computerPlay(){

    // Generate a random number between 0 and 2
    let ranInt = parseInt(Math.random() * 3);

    // Connect the random number to rock or paper or scissor
    if (ranInt === 0) {
        return 'rock';
    } else if (ranInt == 1) {
        return 'paper';
    } else {
        return 'scissor';
    }
}

// Player play: input by prompt
function playerPlay(){
    let answer = '';

    // Validation: only rock, paper, scissor are valid input
    do {

        // Prompt player
        answer = prompt('Choose rock, paper or scissor');

        // Normalize string
        answer = answer.toLowerCase().trim();

    } while (answer !== 'rock' && answer !== 'paper' && answer !== 'scissor');

    return answer;
}

// One round
function playRound(playerSelection, computerSelection){

    // Normalize strings
    const player = playerSelection.toLowerCase().trim();
    const computer = computerSelection.toLowerCase().trim();

    // Compute a tie
    if (player === computer) {
        return 'tie';
    }

    // Compute a match: scissor > rock > paper, paper < rock < scissor and rock < scissor > paper
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

// Play a match
function game() {
    let playerWin = 0;
    let computerWin = 0;

    // Play 5 round
    for (let i = 0; i < 5; i++) {

        // Player and computer play
        const playerSelection = playerPlay();
        const computerSelection = computerPlay();

        // Play a round
        let winner = playRound(playerSelection, computerSelection);

        // Compute winnings and display round results
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
