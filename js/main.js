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
        if (player === 'Rock' || computer === 'Rock') {
            result.textContent = `${player} - ${computer}. Computer won the round`;
            return 'computer';
        } else {
            result.textContent = `${player} - ${computer}. Player won the round`;
            return 'player';
        }
    } else {
        if (player === 'Rock' || computer === 'Rock') {
            result.textContent = `${player} - ${computer}. Player won the round`;
            return 'player';
        } else {
            result.textContent = `${player} - ${computer}. Computer won the round`;
            return 'computer';
        }
    }
}

/**
* This function let the player select the play and call playRound with
* player selection and computer random selection.
*/

function game(){

    const buttons = document.querySelectorAll('.btn');
    let playerWin = 0;
    let computerWin = 0;

    const playerScore = document.querySelector('#player-score');
    const computerScore = document.querySelector('#computer-score');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const computer = computerPlay();
            const winner = playRound(button.dataset.play, computer);

            if (winner === 'player') {
                playerWin++;
                playerScore.textContent = playerWin;
            }

            if (winner === 'computer') {
                computerWin++;
                computerScore.textContent = computerWin;
            }

            if (playerWin === 5 || computerWin === 5){
                finalScore(playerWin, computerWin);
                buttons.forEach(button => {
                    button.setAttribute('disabled', true);
                })
            }
        });
    });
}

function finalScore(plyScore, cpuScore) {
    const final = document.querySelector('#final');
    const reload = document.querySelector('#reload');


    if (plyScore > cpuScore) {
        final.textContent = 'Player win the game';
    } else {
        final.textContent = 'Computer win the game';
    }

    const btnReload = document.createElement('button');
    btnReload.textContent = 'Play Again';
    btnReload.setAttribute('id', 'reload');

    reload.appendChild(btnReload);

    btnReload.addEventListener('click', () => {
        window.location.reload();
    });
}
/**
* This function play a match of five rounds, compute the winning of each round
* and display it. If there is a tie the round is repeated.
* After five round compute and displey the winner of the match.
*/
// function game() {
//     let playerWin = 0;
//     let computerWin = 0;
//
//     for(let i = 0; i <5; i++) {
//         const winner = playerPlay();
//         playerWin++;
//         console.log(winner);
//
//     }

            // for (let i = 0; i < 5; i++) {
    //
    //     const winner = playerPlay();
    //
    //     if (winner === 'player') {
    //         playerWin++;
    //         console.log(`You Win the Round! Player: ${playerWin} - Computer: ${computerWin}`);
    //     } else if (winner === 'computer') {
    //         computerWin++;
    //         console.log(`You Lose the Round! Player: ${playerWin} - Computer: ${computerWin}`);
    //     } else {
    //         i--;
    //         console.log('It\'s a tie. Play again this round');
    //     }
    // }
    //
    // // Display the final score
    // if (playerWin > computerWin) {
    //     console.log(`You Win the Match! Final score: ${playerWin} for Player - ${computerWin} for Computer`);
    // } else {
    //     console.log(`You Lose the Match! Final score: ${playerWin} for Player - ${computerWin} for Computer`);
    // }
//}

game();
