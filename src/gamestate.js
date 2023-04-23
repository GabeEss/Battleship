import createPlayer from "./player";
// import { placePhase, defaultPlacePhase, defaultPlacePhase2 } from "./place-phase";
// import { mainPhase, defaultMainPhase } from "./main-phase";
import { setupDOM } from "./dom-and-event-listeners";

// This function creates two player objects and passes them into the setupDOM function.
// Largely the actual gamestate is controlled by dom-and-event-listeners.js, but if you want to test
// the game logic without the DOM or event listeners, you can do that here using the default functions
// that have been commented out.
export default function gameState(content) {
    const playerOne = createPlayer(); // Two separate boards.
    const playerTwo = createPlayer();

    setupDOM(content, playerOne, playerTwo);

    // Functions to help test to make sure everything works outside of the DOM and before event listeners.
    // defaultPlacePhase(playerOne);
    // defaultPlacePhase2(playerTwo);
    // defaultMainPhase(playerOne, playerTwo);
}