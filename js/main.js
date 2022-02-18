/**
* This function take a random number and associate it to rock, paper or scissor
* and return that value as a string
*/
function computerPlay(){

    let ranInt = parseInt(Math.random() * 3);

    if (ranInt === 0) {
        return 'Rock';
    } else if (ranInt == 1) {
        return 'Paper';
    } else {
        return 'Scissor';
    }
}

/**
* This function let the player select the play and call playRound with
* player selection and computer random selection.
*/
function playerPlay(){

    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const computer = computerPlay();
            playRound(button.dataset.play, computer);
        });
    });
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
function playRound(player, computer){
    const result = document.querySelector('#round-winner');
    result.textContent = '';

    if (player === computer) {
        result.textContent = `${player} - ${computer}. This is a tie`
        return 'tie';
    }

    if (player > computer) {
        if (player === 'rock' || computer === 'rock') {
            result.textContent = `${player} - ${computer}. Computer won the round`;
            return 'computer';
        } else {
            result.textContent = `${player} - ${computer}. Player won the round`;
            return 'player';
        }
    } else {
        if (player === 'rock' || computer === 'rock') {
            result.textContent = `${player} - ${computer}. Player won the round`;
            return 'player';
        } else {
            result.textContent = `${player} - ${computer}. Computer won the round`;
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

while (playerWin < 5) {
    if (winner === 'player') {
        playerWin++;
        const playerScore = document.querySelector('#player-score');
        playerScore.textContent = playerWin;
        console.log(`You Win the Round! Player: ${playerWin} - Computer: ${computerWin}`);
    } else if (winner === 'computer') {
        computerWin++;
        console.log(`You Lose the Round! Player: ${playerWin} - Computer: ${computerWin}`);
    } else {
        console.log('It\'s a tie. Play again this round');
    }

}





    // // Display the final score
    // if (playerWin > computerWin) {
    //     console.log(`You Win the Match! Final score: ${playerWin} for Player - ${computerWin} for Computer`);
    // } else {
    //     console.log(`You Lose the Match! Final score: ${playerWin} for Player - ${computerWin} for Computer`);
    // }
}

playerPlay()
