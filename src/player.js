import { createGameBoard } from './gameboard-factory';

// Each player has their own gameboard, a function to place a ship, a function to attack, and an
// array containing their ships.
export default function createPlayer() {
   const bFactory = createGameBoard(); // The board factory function.

   function place(length, axis, x, y) {
     bFactory.placeShip(length, axis, x, y);
   }
   
   function attacked(x, y) {
     bFactory.receiveAttack(x, y);
   }

   return {
    bFactory, 
    place,
    attacked
   };
}