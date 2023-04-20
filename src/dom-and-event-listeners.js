import { displayBoard } from "./display-board";
import { mainPhase } from "./main-phase";
import { aiPlacePhase, placePhase } from "./place-phase";

let one = ""; // player one
let two = ""; // player two
let main = ""; // main container (content)
let board = ""; // board container
let upper = ""; // upper container

export function setupDOM(content, playerOne, playerTwo) {
    one = playerOne;
    two = playerTwo;
    main = content;

    const upperContainer = document.createElement('upper-container');
    upper = upperContainer;
    const startButton = document.createElement('button');
    startButton.textContent = "Start Game";

    startButton.addEventListener('click', () => {
        startButtonEvent(startButton);
    })
    
    const boardContainer = document.createElement('board-container');
    board = boardContainer;
    upperContainer.appendChild(startButton);
    content.appendChild(upperContainer);
    content.appendChild(boardContainer);
}

function axisSwap(axis) {
    if(axis == 'x')
        return 'y';
    else return 'x';
}

function startButtonEvent(startButton) {
    // Remove the start button
    upper.removeChild(startButton);

    // Descriptor
    let placeShipsDescription = document.createElement('h1');
    placeShipsDescription.textContent = "Place Your Ships";
    upper.appendChild(placeShipsDescription);

    // Display the player's grid to place ships.
    const gridPlayerOne = displayBoard(one);
    board.appendChild(gridPlayerOne);

    placeShipsEvent();
}

let axis = 'x'; // default axis for placing ships

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
        console.log(main);
      aiPlacePhase(two); // AI places ships randomly
      const playerTiles = document.querySelectorAll('.cell');
      playerTiles.forEach(tile => {
        tile.removeEventListener("click", handlePlaceShips);
      })
      mainPhaseEvent();
    }
  }
  
  function placeShipsEvent() {
    // Click to change the axis the player wishes to place his ships.
    let axisButton = document.createElement('button');
    axisButton.textContent = "Swap Axis";
    axisButton.addEventListener('click', () => axis = axisSwap(axis));
    upper.appendChild(axisButton);
  
    // Get all the tiles and create a click event.
    const playerTiles = document.querySelectorAll('.cell');
    playerTiles.forEach(tile => {
      tile.addEventListener('click', handlePlaceShips);
    })
  }

function mainPhaseEvent() {
    const playerTiles = document.querySelectorAll('.enemy-cell');
    
}