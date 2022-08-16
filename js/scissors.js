const gameValues = ['Rock', 'Paper', 'Scissors'];
let playerScore = 0;
let computerScore = 0;
const buttons = [...document.querySelectorAll('.btn-pick')]
const buttonsComputer = [...document.querySelectorAll('.btn-computer')]

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

function activateComputerChoice(computerChoiceIndex) {
    buttonsComputer.forEach((e) => {
        e.classList.add('btn-outline-danger')
        e.classList.remove('btn-danger')
        e.classList.add('disabled')
    })



    buttonsComputer[computerChoiceIndex].classList.remove('btn-outline-danger')
    buttonsComputer[computerChoiceIndex].classList.add('btn-danger')
    buttonsComputer[computerChoiceIndex].classList.remove('disabled')
}

function resetComputerChoice() {

}

function randomIndex() {
    return Math.floor(Math.random() * (3))
}

function resetGame() {
    playerScore = 0
    computerScore = 0
    console.log('Score restore.');
    updateComputerScoreHtml(computerScore)
    updatePlayerScoreHtml(playerScore)
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
    const index = randomIndex()
    const computerChoice = gameValues[index];
    activateComputerChoice(index)
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
        setTimeout(resetGame, 1500)
    }
    if (playerScore === 3) {
        console.log(`You win. Congrats`);
        setTimeout(resetGame, 1500)
    }

}