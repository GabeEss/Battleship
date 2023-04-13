import { createShip } from "./ship-factory";

export function createGameBoard() {
    let board = new Array(10);
    generateBoard(board);
    let ships = new Array();
    let occupiedSpaces = new Set();

    // 10 by 10 array
    function generateBoard(board) {
        for(let i = 0; i < board.length; i++){
            board[i] = new Array(10);
        }
    }

    // Check if the given space is occupied by another ship
    function isOccupiedSpace(x, y) {
        return occupiedSpaces.has(`${x}${y}`);
    }

    // Test for a ship placed out of bounds. Function returns null if out of bounds.
    function outOfBounds(axis, x, y) {
        if(axis === 'x') {
            let outOfBounds = x + length;
            if(outOfBounds > 9)
                return null;
        } else if(axis === 'y') {
            let outOfBounds = y + length;
            if(outOfBounds > 9)
                return null;
        }
    }

    // "length" is the length of the ship.
    // "axis" is the axis the ship will be placed.
    // "x" and "y" are the starting x and y coordinates the ship will be placed.
    function placeShip(length, axis, x, y) {
        
        // Test out of bounds.
        if(outOfBounds(axis, x, y) === null) {
            return ships; // return ships without creating anything
        }

        let shipPosition = [];
        for(let i = 0; i < length; i++) {
            if(axis === 'x') {
                let xIncrement = x + i;
                if(isOccupiedSpace(xIncrement, y)) {
                    return ships;
                }
                shipPosition[i] = `${xIncrement}${y}`;
            } else if(axis === 'y') {
                let yIncrement = y + i;
                if(isOccupiedSpace(x, yIncrement)) {
                    return ships;
                }
                shipPosition[i] = `${x}${yIncrement}`;
            }
        }

        // Add the new ship's coordinates to the occupiedSpaces Set
        shipPosition.forEach((coord) => {
            occupiedSpaces.add(coord);
        });


        const ship = createShip(length, shipPosition); // Create the ship.
        ships.push(ship); // Push the new ship onto the ships array.

        // Return the ships array.
        return ships;
    }

    // Receives an x,y coordinate for attack.
    // Determines if the board coordinate has a miss/hit in it already.
    // Nested loops to go through each ship's coordinates. 
    // O(n^m) time complexity. Where n is the number of ships and m is the xy of each ship.
    function receiveAttack(x, y) {
        let xy = x.toString() + y.toString();
        if(board[x][y]) return false; 
        else {
            board[x][y] = "miss";
            for(let i = 0; i < ships.length; i++) {
                for(let j = 0; j < ships[i].coordinates.length; j++) {
                    if(ships[i].coordinates[j] === xy) {
                        board[x][y] = "hit";
                        ships[i].hit();
                    }
                }
            }
            return true;
        }
    }

    return {
        board,
        placeShip,
        receiveAttack,
    };
}