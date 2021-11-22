const boxElement = document.querySelector('.boxes');
let player1Name = localStorage.getItem('p1');
let player2Name = localStorage.getItem('p2');
let xPlayer = 'x';
let oPlayer = 'o';
let currentPlayer = xPlayer;
let winStatus = [];

boxElement.addEventListener('click', function (event) {
    if (event.target.classList != 'inUse') {
        let id = event.target.id;
        event.target.innerHTML = currentPlayer;
        winStatus.push(id);
        winStatus[id] = currentPlayer;
        event.target.classList.toggle('inUse');
        checkWin();
        switchPlayer();
    } else {
        alert(`Spot already taken! You'll have to choose another square!`);
    }
});

// switch player. If the current player is 'x', change it to 'o'.
function switchPlayer() {
    if (currentPlayer == xPlayer) {
        currentPlayer = oPlayer;
    } else {
        currentPlayer = xPlayer;
    }
}

// check if the user has the cells needed to win. How can I make this smaller?
function checkWin() {
    if (
        winStatus.b1 == currentPlayer &&
        winStatus.b2 == currentPlayer &&
        winStatus.b3 == currentPlayer
    ) {
        displayWinner();
    }

    if (
        winStatus.b4 == currentPlayer &&
        winStatus.b5 == currentPlayer &&
        winStatus.b6 == currentPlayer
    ) {
        displayWinner();
    }

    if (
        winStatus.b7 == currentPlayer &&
        winStatus.b8 == currentPlayer &&
        winStatus.b9 == currentPlayer
    ) {
        displayWinner();
    }
    if (
        winStatus.b1 == currentPlayer &&
        winStatus.b4 == currentPlayer &&
        winStatus.b7 == currentPlayer
    ) {
        displayWinner();
    }
    if (
        winStatus.b2 == currentPlayer &&
        winStatus.b5 == currentPlayer &&
        winStatus.b8 == currentPlayer
    ) {
        displayWinner();
    }
    if (
        winStatus.b3 == currentPlayer &&
        winStatus.b6 == currentPlayer &&
        winStatus.b9 == currentPlayer
    ) {
        displayWinner();
    }
    if (
        winStatus.b1 == currentPlayer &&
        winStatus.b5 == currentPlayer &&
        winStatus.b9 == currentPlayer
    ) {
        displayWinner();
    }
    if (
        winStatus.b3 == currentPlayer &&
        winStatus.b5 == currentPlayer &&
        winStatus.b7 == currentPlayer
    ) {
        displayWinner();
    }

    // check if winStatus[] length is at maximum amount of possible cells played. If so, nobody wins.
    if (winStatus.length == 9) {
        displayDraw();
    }
}

function displayWinner() {
    let winnerText = document.createElement('p');
    winner.classList.add('winner-text');
    if (currentPlayer == xPlayer) {
        winnerText.innerHTML = `${player1Name} wins!`;
        winner.append(winnerText);
    } else if (currentPlayer == oPlayer) {
        winnerText.innerText = `${player2Name} wins!`;
        winner.append(winnerText);
    }
    boxElement.style.pointerEvents = 'none';
}

function displayDraw() {
    let winnerText = document.createElement('p');
    winner.classList.add('winner-text');
    winnerText.innerText = `It's a draw! Fancy a rematch?`;
    winner.append(winnerText);
    boxElement.style.pointerEvents = 'none';
}

function setName() {
    player1Name = document.querySelector('.player-1-name').value;
    player2Name = document.querySelector('.player-2-name').value;
    localStorage.setItem('p1', document.querySelector('.player-1-name').value);
    localStorage.setItem('p2', document.querySelector('.player-2-name').value);
    if (player1Name == '' || player2Name == '') {
        alert('Type your name to continue!');
    } else {
        let playButton = document.querySelector('.play-button');
        playButton.style.visibility = 'visible';
    }
}

//reload the window on button press
function restart() {
    window.location.reload();
}
