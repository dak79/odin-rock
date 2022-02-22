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
        result.textContent = `Computer plays ${computer}. This is a tie`
        return 'tie';
    }

    if (player > computer) {
        if (player === 'Rock' || computer === 'Rock') {
            result.textContent = `Computer plays ${computer}. You lost the round`;
            return 'computer';
        } else {
            result.textContent = `Computer plays ${computer}. You won the round`;
            return 'player';
        }
    } else {
        if (player === 'Rock' || computer === 'Rock') {
            result.textContent = `Computer plays ${computer}. You won the round`;
            return 'player';
        } else {
            result.textContent = `Computer plays ${computer}. You lost the round`;
            return 'computer';
        }
    }
}

/**
* This function play a match: the first who arrive to 5 win.
*/
function game(){

    const buttons = document.querySelectorAll('.btn');
    let playerWin = 0;
    let computerWin = 0;

    const playerScore = document.querySelector('#player-score');
    const computerScore = document.querySelector('#computer-score');

    // Play a round with cpu random selection and user selection.
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const computer = computerPlay();
            const winner = playRound(button.dataset.play, computer);

            // Increase the score of winner
            if (winner === 'player') {
                playerWin++;
                playerScore.textContent = playerWin;
            }

            if (winner === 'computer') {
                computerWin++;
                computerScore.textContent = computerWin;
            }

            // Declare match winner and close the match
            if (playerWin === 5 || computerWin === 5){
                finalScore(playerWin, computerWin);
                buttons.forEach(button => {
                    button.setAttribute('disabled', true);
                })
            }
        });
    });
}

/**
* This function show the winner and give the possibility to play again.
* @param {integer} plyScore - Final player score.
* @param {integer} cpuScore - Final computer score.
*/
function finalScore(plyScore, cpuScore) {
    const final = document.querySelector('#final');
    const reload = document.querySelector('#reload');

    // Congrats to the winner
    if (plyScore > cpuScore) {
        final.textContent = 'You win the game';
        final.classList.add('player-win');
    } else {
        final.textContent = 'Computer win the game';
        final.classList.add('computer-win');
    }

    // Play again possibility
    const btnReload = document.createElement('button');
    btnReload.textContent = 'Play Again';
    btnReload.setAttribute('id', 'reload');
    btnReload.classList.add('btn-reload');

    reload.appendChild(btnReload);

    btnReload.addEventListener('click', () => {
        window.location.reload();
    });
}

game();
