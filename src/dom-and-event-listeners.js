import { displayBoard, displayEnemyBoard } from "./display-board";
import gameOverCheck from "./game-over-check";
import { playerMainPhase, aiMainPhase } from "./main-phase";
import { aiPlacePhase, placePhase } from "./place-phase";
import createPlayer from "./player";

let one = ""; // player one
let two = ""; // player two
let main = ""; // main container (content), just in case
let board = ""; // board container
let upper = ""; // upper container


// Sets up the start button and builds some containers for later use.
export function setupDOM(content, playerOne, playerTwo) {
    one = playerOne;
    two = playerTwo;
    main = content;

    const upperContainer = document.createElement('upper-container');
    upper = upperContainer;
    const startButton = document.createElement('button');
    startButton.textContent = "Start Game";

    startButton.addEventListener('click', () => {
        startButtonEvent();
        // Remove the start button
        upper.removeChild(startButton);
    })
    
    const boardContainer = document.createElement('board-container');
    board = boardContainer;
    upperContainer.appendChild(startButton);
    content.appendChild(upperContainer);
    content.appendChild(boardContainer);
}

// When the swap axis button is clicked, it changes the axis to place the ship.
function axisSwap(axis) {
    if(axis == 'x')
        return 'y';
    else return 'x';
}

// When the start button is clicked. Adds a description of what to do, generates the player board,
// calls the function to place the ships.
function startButtonEvent() {
    // Descriptor
    let placeShipsDescription = document.createElement('h1');
    placeShipsDescription.id = 'header-description';
    placeShipsDescription.textContent = "Place Your Ships";
    upper.appendChild(placeShipsDescription);

    // Display the player's grid to place ships.
    const gridPlayerOne = displayBoard(one);
    board.appendChild(gridPlayerOne);

    placeShipsEvent();
}

let axis = 'x'; // default axis for placing ships

// This function determines the length of the ship to be placed and calls placePhase until
// all the ships have been placed. Also removes event listeners once
// all the ships are placed.
function handlePlaceShips(event) {
    let ships = one.bFactory.ships;
    let length = 2; // The first ship is the patrol boat.

    if(ships.length == 0)
      length = 2; // place the patrol boat
    else if(ships.length == 1) 
      length = 3; // place the submarine
    else if(ships.length == 2)
      length = 3; // place the destroyer
    else if(ships.length == 3)
      length = 4; // place the battleship
    else if(ships.length == 4)
      length = 5; // place the carrier
  
    if(ships.length < 5)
      placePhase(one, event.target.id, axis, length);
  
    if(ships.length == 5) {
      aiPlacePhase(two); // AI places ships randomly
      const playerTiles = document.querySelectorAll('.cell');
      playerTiles.forEach(tile => {
        tile.removeEventListener("click", handlePlaceShips);
      })
      mainPhaseEvent();
    }
}
  

// This function adds the event to each tile to place ships and creates a button (and event) to
// change the axis the ship is placed.
function placeShipsEvent() {
    // Click to change the axis the player wishes to place his ships.
    let axisButton = document.createElement('button');
    axisButton.id = 'axis-button';
    axisButton.textContent = "Swap Axis";
    axisButton.addEventListener('click', () => axis = axisSwap(axis));
    upper.appendChild(axisButton);
  
    // Get all the tiles and create a click event.
    const playerTiles = document.querySelectorAll('.cell');
    playerTiles.forEach(tile => {
      tile.addEventListener('click', handlePlaceShips);
    })
}

// This function removes the axis button from the positioning phase, changes the header text, 
// creates a new board to display the opponent's tiles, and
// adds event listeners to the opponent's board so that the player can make attacks.
function mainPhaseEvent() {
    let axisButton = document.getElementById('axis-button');
    upper.removeChild(axisButton);
    let header = document.getElementById('header-description');
    header.textContent = 'Choose a Tile to Strike';

    const gridPlayerTwo = displayEnemyBoard(two);
    board.appendChild(gridPlayerTwo);

    const enemyTiles = document.querySelectorAll('.enemy-cell');
    enemyTiles.forEach(tile => {
        tile.addEventListener('click', handleMainPhase);
      })
}

// This function handles the transition from the player's move to the ai's move. It also checks
// when the game ends and calls the handler for that phase.
function handleMainPhase(event) {
    // Don't increment the turn if the player is hitting the same square.
    if(event.target.classList.contains('hit') || event.target.classList.contains('miss'));
    else {
        waitForPlayerPhase(event); // wait for the player turn

        // Check if player one wins.
        if(gameOverCheck(two, 'two')) {
            handleGameOver("Player One", one);
        }
        else {
            // AI turn occurs after the player turn.
            aiMainPhase(one);

            // Check if player two wins.
            if(gameOverCheck(one, 'one')) {
                handleGameOver("Player Two", two);
            }
        }
    }
}

// Passes the AI player object, the AI tile id, and the AI tile. Forces AI to wait until
// player has made their move.
async function waitForPlayerPhase(event) {
    await playerMainPhase(two, event.target.id, event.target);
}

// This function displays the winner in the header, displays the unrevealed ai ships, removes
// the event listeners and displays the reset button.
function handleGameOver(winner, winnerObject) {
    let header = document.getElementById('header-description');
    header.textContent = 'Winner: ' + winner + '!';

    const occupiedSpaces = winnerObject.bFactory.occupiedSpaces;
    // Go through all the coordinates with a ship.
    occupiedSpaces.forEach((item) => {
        let tile = "";
        if(winner == "Player Two")
            tile = document.getElementById(`e${item}`);
        else
            tile = document.getElementById(`${item}`);
        // Change the color of the tile to show the loser the location of the enemy ships.
        if(!tile.classList.contains('hit') || !tile.classList.contains('miss') || !tile.classList.contains('player-ship'))
            tile.classList.add('player-ship');
    })

    // Remove event listeners for each tile.
    const enemyTiles = document.querySelectorAll('.enemy-cell');
    enemyTiles.forEach(tile => {
        tile.removeEventListener('click', handleMainPhase);
      })

    let resetButton = document.createElement('button');
    resetButton.textContent = "Play again?";
    upper.appendChild(resetButton);

    resetButton.addEventListener('click', resetEvent);
}

// This function removes everything in the main container, re-adds the upper container
// and the board container, re-creates the players and initializes them, and calls the startButtonEvent.
function resetEvent() {
    main.innerHTML = ""; // Remove everything in the content container.

    const upperContainer = document.createElement('upper-container'); // Re-create upperContainer
    upper = upperContainer;
    const boardContainer = document.createElement('board-container'); // Re-create boardContainer
    board = boardContainer;

    one = createPlayer(); // Re-create player one and player two.
    two = createPlayer();

    main.appendChild(upperContainer);
    main.appendChild(boardContainer);

    startButtonEvent(); // call the start button event
}