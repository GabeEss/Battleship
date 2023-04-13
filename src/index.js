import './style.css';
import { createGameBoard } from './gameboard-factory';

const playerBoard = createGameBoard();

let ships = playerBoard.placeShip(2, "x", 1, 4);
ships = playerBoard.placeShip(2, "x", 0, 0);
console.log(ships);
playerBoard.receiveAttack(1, 4);

console.log(playerBoard);