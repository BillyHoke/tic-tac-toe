const boxElement = document.querySelector('.boxes');
let playButton = document.querySelector('.play-button');
let proceedButton = document.querySelector('.proceed-button');
let player1Name = localStorage.getItem('p1');
let player2Name = localStorage.getItem('p2');
let xPlayer = 'x';
let oPlayer = 'o';
let currentPlayer = xPlayer;
let winStatus = [];
let b1 = document.getElementById('b1');
let b2 = document.getElementById('b2');
let b3 = document.getElementById('b3');
let b4 = document.getElementById('b4');
let b5 = document.getElementById('b5');
let b6 = document.getElementById('b6');
let b7 = document.getElementById('b7');
let b8 = document.getElementById('b8');
let b9 = document.getElementById('b9');
// adding audio
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();
const audioElement = document.querySelector('audio');
const elimSound = document.querySelector('.elim');
const xPlay = document.querySelector('.x-play');
const oPlay = document.querySelector('.o-play');
let audioButton = document.querySelector('.mute-button');
let audioState = 'paused';

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
        xPlay.play();
        currentPlayer = oPlayer;
    } else {
        currentPlayer = xPlayer;
        oPlay.play();
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
        b1.style.color = 'red';
        b2.style.color = 'red';
        b3.style.color = 'red';
    } else if (
        winStatus.b4 == currentPlayer &&
        winStatus.b5 == currentPlayer &&
        winStatus.b6 == currentPlayer
    ) {
        displayWinner();
        b4.style.color = 'red';
        b5.style.color = 'red';
        b6.style.color = 'red';
    } else if (
        winStatus.b7 == currentPlayer &&
        winStatus.b8 == currentPlayer &&
        winStatus.b9 == currentPlayer
    ) {
        displayWinner();
        b7.style.color = 'red';
        b8.style.color = 'red';
        b9.style.color = 'red';
    } else if (
        winStatus.b1 == currentPlayer &&
        winStatus.b4 == currentPlayer &&
        winStatus.b7 == currentPlayer
    ) {
        displayWinner();
        b1.style.color = 'red';
        b4.style.color = 'red';
        b7.style.color = 'red';
    } else if (
        winStatus.b2 == currentPlayer &&
        winStatus.b5 == currentPlayer &&
        winStatus.b8 == currentPlayer
    ) {
        displayWinner();
        b2.style.color = 'red';
        b5.style.color = 'red';
        b8.style.color = 'red';
    } else if (
        winStatus.b3 == currentPlayer &&
        winStatus.b6 == currentPlayer &&
        winStatus.b9 == currentPlayer
    ) {
        displayWinner();
        b3.style.color = 'red';
        b6.style.color = 'red';
        b9.style.color = 'red';
    } else if (
        winStatus.b1 == currentPlayer &&
        winStatus.b5 == currentPlayer &&
        winStatus.b9 == currentPlayer
    ) {
        displayWinner();
        b1.style.color = 'red';
        b5.style.color = 'red';
        b9.style.color = 'red';
    } else if (
        winStatus.b3 == currentPlayer &&
        winStatus.b5 == currentPlayer &&
        winStatus.b7 == currentPlayer
    ) {
        displayWinner();
        b3.style.color = 'red';
        b5.style.color = 'red';
        b7.style.color = 'red';
    }

    // check if winStatus[] length is at maximum amount of possible cells played. If so, nobody wins.
    else if (winStatus.length == 9) {
        displayDraw();
    }
}

function displayWinner() {
    let winnerText = document.createElement('p');
    winner.classList.add('winner-text');
    if (currentPlayer == xPlayer) {
        winnerText.innerHTML = `${player2Name} has been <span class"red">eliminated</span>`;
        winner.append(winnerText);
    } else if (currentPlayer == oPlayer) {
        winnerText.innerHTML = `${player1Name} has been <span class="red">eliminated</span>`;
        winner.append(winnerText);
    }
    boxElement.style.pointerEvents = 'none';
    playButton.style.visibility = 'visible';
    setTimeout(function () {
        elimSound.play();
    }, 150);
}

function displayDraw() {
    let winnerText = document.createElement('p');
    winner.classList.add('winner-text');
    winnerText.innerText = `It's a draw! Play again?`;
    winner.append(winnerText);
    boxElement.style.pointerEvents = 'none';
    playButton.style.visibility = 'visible';
}

function setName() {
    player1Name = document.querySelector('.player-1-name').value;
    player2Name = document.querySelector('.player-2-name').value;
    localStorage.setItem('p1', document.querySelector('.player-1-name').value);
    localStorage.setItem('p2', document.querySelector('.player-2-name').value);
    if (player1Name == '' || player2Name == '') {
        alert('Type your name to continue!');
    } else {
        proceedButton.style.visibility = 'hidden';
        playButton.style.visibility = 'visible';
    }
}

function handleAudio() {
    if (audioState === 'paused') {
        playAudio();
    } else if (audioState === 'playing') {
        pauseAudio();
    }
}

function playAudio() {
    audioButton.src = 'images/play.png';
    audioElement.play();
    audioState = 'playing';
}

function pauseAudio() {
    audioButton.src = 'images/mute.png';
    audioElement.pause();
    audioState = 'paused';
}

//reload the window on button press
function restart() {
    window.location.reload();
}

