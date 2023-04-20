import gameOverCheck from "./game-over-check";

// Function attacks the opponent's tile. A class is added to the tile to indicate a hit or miss
// via CSS.
export function playerMainPhase(opponent, id, tile) {
    // Wrap the code in a promise, so the aiMainPhase waits for the playerMainPhase.
    return new Promise(resolve => {
        let x = parseInt(id.charAt(0)); // get coordinates from tile id
        let y = parseInt(id.charAt(1));

        opponent.attacked(x, y); // attack the enemy player

        if(opponent.bFactory.board[x][y] === 'miss')
            tile.classList.add('miss'); // if miss, add class 'miss' for styling
        else
            tile.classList.add('hit'); // if hit, add class 'hit' for styling
        resolve();
        });
}

export function aiMainPhase(opponent) {
    let x;
    let y;
    let tile;

    while(true) {
        x = Math.floor(Math.random() * 10); // get random x y coordinates
        y = Math.floor(Math.random() * 10);
        tile = document.getElementById(`${x}${y}`); // find the corresponding tile

        // The AI will continue to find coordinates until it finds a space it has not targeted.
        if(tile.classList.contains('miss') || tile.classList.contains('hit'));
        else break;
    }
    

    opponent.attacked(x, y);

    if(opponent.bFactory.board[x][y] === 'miss')
        tile.classList.add('miss');
    else
        tile.classList.add('hit');
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