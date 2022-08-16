const gameValues = ['Paper', 'Rock', 'Scissors'];
let playerScore = 0;
let computerScore = 0;
const buttons = [...document.querySelectorAll('.btn-pick')]

const playerScoreHtml = document.querySelector('.player-score__value')
const playerProgressBar = document.querySelector('.player-score__progress')

const computerScoreHtml = document.querySelector('.computer-score__value')
const computerProgressBar = document.querySelector('.computer-score__progress')

const pairWinner = [
        ['Scissors', 'Paper'],
        ['Paper', 'Rock'],
        ['Rock', 'Scissors']
    ] // index 0 is winner


buttons.forEach((elem) => {
    elem.addEventListener('click', () => {
        getResult(elem.textContent)
    })
})

function randomValue() {
    return gameValues[Math.floor(Math.random() * (3))]
}

function resetGame() {
    playerScore = 0
    computerScore = 0
    console.log('Score restore.');
}

function updatePlayerScoreHtml(score) {
    playerScoreHtml.textContent = score;
    playerProgressBar.style.width = `${score*33.3}%`;
}

function updateComputerScoreHtml(score) {
    computerScoreHtml.textContent = score;
    computerProgressBar.style.width = `${score*33.3}%`;
}

function getResult(playerPick) {
    const computerChoice = randomValue();
    const gamePair = `["${playerPick}","${computerChoice}"]`.toLocaleLowerCase()
    const parcedPairWinner = JSON.stringify(pairWinner);
    if (playerPick === computerChoice) { return console.log('The draw') } else {
        if (parcedPairWinner.toLocaleLowerCase().indexOf(gamePair) > 0) {
            console.log(`You win. ${playerPick} beats ${computerChoice}. Game score: You - ${++playerScore}; AI - ${computerScore}`);
            updatePlayerScoreHtml(playerScore)
        } else {
            console.log(`You lose. ${computerChoice} beats ${playerPick}. Game score: You - ${playerScore}; AI - ${++computerScore}`);
            updateComputerScoreHtml(computerScore)
        }
    }
    if (computerScore === 3) {
        console.log(`You lose. Try again.`);
        resetGame()
        updateComputerScoreHtml(computerScore)
        updatePlayerScoreHtml(playerScore)
    }
    if (playerScore === 3) {
        console.log(`You win. Congrats`);
        resetGame()
        updateComputerScoreHtml(computerScore)
        updatePlayerScoreHtml(playerScore)
    }

}