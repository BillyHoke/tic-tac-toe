### What are we doing?

Making a tic-tac toe game
Hosted on github pages
Readme.md file stating all the tech used for the project

### Tic-Tac-Toe, what we need.

Render in a browser
Switch turns between 2 players
Include a html, css and js file
JS DOM manipulation
Make it work
Make it look nice

### Tic-Tac-Toe in its simplest form

    * Setup a 3 x 3 game board in the browser
    * Let the user choose when to start the game (Start Button)
    * Add on click events to the game board and event.target each box
    * When the user first clicks the box, it should add a 'X'
    * When the second player clicks (second click) it should add a '0' to the box they click
    * Rotate in doing so until we find a winner
    * Give players the ability to play again
    * Make sure that once a box is clicked, it CANNOT be clicked again

### How do we find a winner?

    * Multiple if statements targeting certain boxes that either player can win with
    * if (box1 & box2 & box3 == 'x') player 1 wins.
        1   2   3
        4   5   6
        7   8   9

### Code - what do we need to make it work?

# .HTML file

    * Multiple <div>'s for the game board
    * Give each <div> a class or ID to reference them in the DOM
    * Make sure to link the .css and .js files

# .CSS file

    * Grid layout
    * Make everything look nice
    * Make sure you find time to add transition and effects to make it pop

# .JS file

    * Declare all DOM elements as variables
        * querySelectorAll for all the boxes
        * querySelector for the start and restart buttons

    * EventListener() to target each individual <div>.
        * find out a way to make the first click once the game starts as an 'x' and the second click as a '0'. Will have to look into this.
        * use DOM maniuplation to change to either 'x' or '0' upon click

    * Make sure a user cannot click a cell once its already been clicked. Possibly adding an ID or class saying "inUse".

    * A winCondition variable which is mulitple arrays each referencing a box on the grid
        * let winCondition = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
            [1, 5, 9]
        ]

        OR

        * a variable which contains an empty array at the start of the game [] but will populate over the course of the game. Adding the event.target each click. Win condition can then check if either player has the combination needed to win.

    * Variable for player1 and player2
        * during the function that we write that adds user input to that cell, we can call another function that checks which player is currently playing and then change it to the other player. Do this after every turn.
