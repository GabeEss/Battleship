import createPlayer from "./player";
import { placePhase, defaultPlacePhase, defaultPlacePhase2 } from "./place-phase";
import { mainPhase, defaultMainPhase } from "./main-phase";
import { setupDOM } from "./dom-and-event-listeners";

export default function gameState(content) {
    const playerOne = createPlayer(); // Two separate boards.
    const playerTwo = createPlayer();

    setupDOM(content, playerOne, playerTwo);

    // Functions to help test to make sure everything works outside of the DOM and before event listeners.
    // defaultPlacePhase(playerOne);
    // defaultPlacePhase2(playerTwo);
    // defaultMainPhase(playerOne, playerTwo);
}