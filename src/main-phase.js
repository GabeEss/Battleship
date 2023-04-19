import gameOverCheck from "./game-over-check";

export function mainPhase() {

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