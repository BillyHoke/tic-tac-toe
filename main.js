const boxElement = document.querySelector('.boxes');
let gameUpdate = document.querySelector('#game-updates');
let winner = document.querySelector('#winner');
let xPlayer = 'X';
let oPlayer = 'O';
let currentPlayer = xPlayer;
let winStatus = [];

boxElement.addEventListener('click', function (event) {
    if (event.target.classList != 'inUse') {
        let id = event.target.id;
        event.target.innerText = currentPlayer;
        winStatus.push(id);
        winStatus[id] = currentPlayer;
        console.log(event.target);
        event.target.classList.toggle('inUse');
        console.log(winStatus);
        checkWin();
        switchPlayer();
    } else {
        alert(`Someone has already chosen that box! Try again...`);
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
        console.log(`${currentPlayer} wins`);
        winner.innerText = `Player ${currentPlayer} wins!`;
    }

    if (
        winStatus.b4 == currentPlayer &&
        winStatus.b5 == currentPlayer &&
        winStatus.b6 == currentPlayer
    ) {
        console.log(`${currentPlayer} wins`);
        winner.innerText = `Player ${currentPlayer} wins!`;
    }

    if (
        winStatus.b7 == currentPlayer &&
        winStatus.b8 == currentPlayer &&
        winStatus.b9 == currentPlayer
    ) {
        console.log(`${currentPlayer} wins`);
        winner.innerText = `Player ${currentPlayer} wins!`;
    }
    if (
        winStatus.b1 == currentPlayer &&
        winStatus.b4 == currentPlayer &&
        winStatus.b7 == currentPlayer
    ) {
        console.log(`${currentPlayer} wins`);
        winner.innerText = `Player ${currentPlayer} wins!`;
    }
    if (
        winStatus.b2 == currentPlayer &&
        winStatus.b5 == currentPlayer &&
        winStatus.b8 == currentPlayer
    ) {
        console.log(`${currentPlayer} wins`);
        winner.innerText = `Player ${currentPlayer} wins!`;
    }
    if (
        winStatus.b3 == currentPlayer &&
        winStatus.b6 == currentPlayer &&
        winStatus.b9 == currentPlayer
    ) {
        console.log(`${currentPlayer} wins`);
        winner.innerText = `Player ${currentPlayer} wins!`;
    }
    if (
        winStatus.b1 == currentPlayer &&
        winStatus.b5 == currentPlayer &&
        winStatus.b9 == currentPlayer
    ) {
        console.log(`${currentPlayer} wins`);
        winner.innerText = `Player ${currentPlayer} wins!`;
    }
    if (
        winStatus.b3 == currentPlayer &&
        winStatus.b5 == currentPlayer &&
        winStatus.b7 == currentPlayer
    ) {
        console.log(`${currentPlayer} wins`);
        winner.innerText = `Player ${currentPlayer} wins!`;
    }

    // check if winStatus[] length is at maximum amount of possible cells played. If so, nobody wins.
    if (winStatus.length >= 9) {
        winner.innerText = `It's a draw!`;
    }
}

//reload the window on button press
function restart() {
    window.location.reload();
}
