const boxElement = document.querySelector('.boxes');
let gameUpdate = document.querySelector('#game-updates');
let xPlayer = 'x';
let oPlayer = 'o';
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
        checkWin();
        switchPlayer();
    } else {
        alert(`Someone has already chosen that box! Try again...`);
    }
});

function switchPlayer() {
    if (currentPlayer == xPlayer) {
        gameUpdate.innerText = `Player two's turn...`;
        currentPlayer = oPlayer;
    } else {
        currentPlayer = xPlayer;
        gameUpdate.innerText = `Player one's turn...`;
    }
}

function checkWin() {
    if (
        winStatus.b1 == currentPlayer &&
        winStatus.b2 == currentPlayer &&
        winStatus.b3 == currentPlayer
    ) {
        console.log(`${currentPlayer} wins`);
    }

    if (
        winStatus.b4 == currentPlayer &&
        winStatus.b5 == currentPlayer &&
        winStatus.b6 == currentPlayer
    ) {
        console.log(`${currentPlayer} wins`);
    }

    if (
        winStatus.b7 == currentPlayer &&
        winStatus.b8 == currentPlayer &&
        winStatus.b9 == currentPlayer
    ) {
        console.log(`${currentPlayer} wins`);
    }
    if (
        winStatus.b1 == currentPlayer &&
        winStatus.b4 == currentPlayer &&
        winStatus.b7 == currentPlayer
    ) {
        console.log(`${currentPlayer} wins`);
    }
    if (
        winStatus.b2 == currentPlayer &&
        winStatus.b5 == currentPlayer &&
        winStatus.b8 == currentPlayer
    ) {
        console.log(`${currentPlayer} wins`);
    }
    if (
        winStatus.b3 == currentPlayer &&
        winStatus.b6 == currentPlayer &&
        winStatus.b9 == currentPlayer
    ) {
        console.log(`${currentPlayer} wins`);
    }
    if (
        winStatus.b1 == currentPlayer &&
        winStatus.b5 == currentPlayer &&
        winStatus.b9 == currentPlayer
    ) {
        console.log(`${currentPlayer} wins`);
    }
    if (
        winStatus.b3 == currentPlayer &&
        winStatus.b5 == currentPlayer &&
        winStatus.b7 == currentPlayer
    ) {
        console.log(`${currentPlayer} wins`);
    }
}
