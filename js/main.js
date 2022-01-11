// Random computer play
function computerPlay(){

    // Generate a random number between 0 and 2
    let ranInt = parseInt(Math.random()*3);
    console.log(ranInt);

    // Connect the random number to rock or paper or scissor
    if (ranInt === 0){
        return 'rock';
    } else if (ranInt == 1) {
        return 'paper';
    } else {
        return 'scissor';
    }
}

// One round
function playRound(playerSelection, computerSelection){

    // Normalize string
    const player = playerSelection.toLowerCase().trim();
    const computer =computerSelection.toLowerCase().trim();

    // Compute a tie
    if (player === computer) {
        return `It's a tie between ${player} and ${computer}`;
    }

    // Compute a match: scissor > rock > paper, paper < rock < scissor and rock < scissor > paper
    if (player > computer) {
        if (player === 'rock' || computer === 'rock') {
            return `You Lose! ${computer} beats ${player}`;
        } else {
            return `You Win! ${player} beats ${computer}`;
        }
    } else {
        if (player === 'rock' || computer === 'rock') {
            return `You Win! ${player} beats ${computer}`;
        } else {
            return `You Lose! ${computer} beats ${player}`;
        }
    }
}


// Test playRound
const playerSelection = 'scissor';
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));
