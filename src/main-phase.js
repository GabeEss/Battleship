import gameOverCheck from "./game-over-check";

// Function attacks the opponent's tile. A class is added to the tile to indicate a hit or miss
// via CSS. The AI tile id is different from the player's. It is in the format: e00, e01 ... e98, e99
export function playerMainPhase(opponent, id, tile) {
    // Wrap the code in a promise, so the aiMainPhase waits for the playerMainPhase.
    return new Promise(resolve => {
        let x = parseInt(id.charAt(1)); // get coordinates from tile id
        let y = parseInt(id.charAt(2));

        opponent.attacked(x, y); // attack the enemy player

        if(opponent.bFactory.board[x][y] === 'miss') {
            tile.classList.add('miss'); // if miss, add class 'miss' for styling
        }   
        else {
            tile.classList.add('hit'); // if hit, add class 'hit' for styling
        }

        resolve();
        });
}

// Function attacks the opponent's tile. A class is added to the tile to indicate a hit or miss
// via CSS.
export function aiMainPhase(opponent) {
    let x; // the x value to attack
    let y; // the y value to attack
    let tile; // the target tile
    let found = false; // The boolean to indicate if an adjacent tile has been found.

    // Get all tiles with the 'hit' class to indicate the ship has been hit.
    let hits = document.querySelectorAll('.hit');

    // Go through each hit and attempt to find an available target.
    for(let i = 0; i < hits.length; i++) {
        let hit = hits[i];
        if(hit.classList.contains('sunk') || hit.classList.contains('enemy-cell')) {
          // Do nothing and move to the next hit if sunk or an ai ship.
        } else {
          const hitId = hit.id;
          let availableTargetId = aiFindsAdjacentTile(hitId); // find an available target
          if(availableTargetId) {
            x = availableTargetId.charAt(0);
            y = availableTargetId.charAt(1);
            tile = document.getElementById(`${x}${y}`); // find the corresponding tile
            found = true;
            break; // break out of the loop
          }
        }
      }

    // If an adjacent tile was found, attack the target. Otherwise the AI finds a random tile.
    if(found)
        opponent.attacked(x, y); // the enemy player object calls its attacked function
    else {
        tile = aiFindsRandom();
        x = parseInt(tile.id.charAt(0));
        y = parseInt(tile.id.charAt(1));
        opponent.attacked(x, y);
    }
      
    if(opponent.bFactory.board[x][y] === 'miss') {
        tile.classList.add('miss');
    }
        
    else {
        tile.classList.add('hit');
    }
}

// The logic for the AI to find a tile where the space has not been taken or out of bounds.
// Returns the id of the first found target.
function aiFindsAdjacentTile(id) {
    let x = parseInt(id.charAt(0)); // the previous x value where a hit has been found
    let y = parseInt(id.charAt(1)); // the previous y value where a hit has been found
    let array = [x + 1, x - 1, y + 1, y - 1]; // the adjacent tile values
    let found = false; // if the next target has been found
    let targetId = null; // the new target id to return

    for(let i = 0; i < array.length; i++) {
        if(found) break;
        // Discriminate against out of bounds.
        if(array[i] < 0 || array[i] > 9);
        // Search the adjacent tiles on the xaxis. Else the adjacent tiles on the yaxis.
        else {
            if(i < 2) {
                let tile = document.getElementById(`${array[i]}${y}`); // find the corresponding tile
                if(tile.classList.contains('miss') || tile.classList.contains('hit'));
                else {
                    found = true;
                    targetId = tile.id;
                }
            } else {
                let tile = document.getElementById(`${x}${array[i]}`); // find the corresponding tile
                if(tile.classList.contains('miss') || tile.classList.contains('hit'));
                else {
                    found = true;
                    targetId = tile.id;
                }
            }
        }
    }
    return targetId;
}

// AI selects a random square in the grid.
function aiFindsRandom() {
    let count = 0;

    while(true) {
        let x = Math.floor(Math.random() * 10); // get random x y coordinates
        let y = Math.floor(Math.random() * 10);
        let tile = document.getElementById(`${x}${y}`); // find the corresponding tile

        if(!tile.classList.contains('miss') && !tile.classList.contains('hit')) {
            // For 10 attempts, the AI will attempt to find a tile that has two empty
            // adjacent tiles beside the random one selected. If it is unable to find one within
            // 10 attempts, it will just pass through this check.
            if(aiRandomPriority(tile) || count >= 10) {
                // console.log(`Attempt: ${count}`);
                return tile;
            } else {
            count++;
            }
        }
    }
}

// AI prioritizes squares that have two empty tiles adjacent to them.
function aiRandomPriority(tile) {
    let id = tile.id;
    let x = parseInt(id.charAt(0)); // x value of the tile to check
    let y = parseInt(id.charAt(1)); // y value of the tile to check
    let array = [x + 1, x - 1, y + 1, y - 1]; // the adjacent tile values
    let found = false; // if the next target has been found
    let count = 0; // The count to find two empty adjacent tiles.
    let target = null; // the new target id to return

    for(let i = 0; i < array.length; i++) {
        if(found) break;
        // Discriminate against out of bounds.
        if(array[i] < 0 || array[i] > 9);
        // Search the adjacent tiles on the xaxis. Else the adjacent tiles on the yaxis.
        else {
            if(i < 2) {
                let newTile = document.getElementById(`${array[i]}${y}`); // find the corresponding tile
                // If the tile has an open space, iterate the counter.
                if(newTile.classList.contains('miss') || newTile.classList.contains('hit'));
                else count++;
                // When the counter is 2, the tile has been found.
                if(count == 2) {
                    found = true;
                }
            } else {
                if(i == 2) count = 0; // reset the counter
                
                let newTile = document.getElementById(`${x}${array[i]}`);
                if(newTile.classList.contains('miss') || newTile.classList.contains('hit'));
                else count++;

                if(count == 2) {
                    found = true;
                }
            }
        }
    }

    // If the target was found, target will no longer be null.
    if(found) {
        target = tile;
        return target;
    } else
        return target;
    
}

// To help test the game logic without the DOM.
export function defaultMainPhase(one, two) {
    two.attacked(0, 0); // patrol
    two.attacked(1, 0);

    two.attacked(1, 1); // sub
    two.attacked(2, 1);
    two.attacked(3, 1);

    two.attacked(2, 2); // destroyer
    two.attacked(3, 2);
    two.attacked(4, 2);

    two.attacked(3, 3); // battleship
    two.attacked(4, 3);
    two.attacked(5, 3);
    two.attacked(6, 3);

    two.attacked(4, 4); // carrier
    two.attacked(5, 4);  
    two.attacked(6, 4);  
    two.attacked(7, 4);  
    two.attacked(8, 4);

    if(gameOverCheck(one)) {
        console.log("The game is over. Player two wins.");
    }
    else if(gameOverCheck(two)) {
        console.log("The game is over. Player one wins.");
    }
    else {
        console.log("No one won. Something went wrong.");
    }
}