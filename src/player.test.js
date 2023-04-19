import createPlayer from "./player"

const player = createPlayer();
player.place(2, "x", 0, 0);


// Tests the integration of the ship factory with the board game factory function
// and the board game factory function with the player factory function. If this test breaks, it
// probably means the parameters have changed between these functions.
test('coordinate test', () => {
    const expectedCoordinates = [ "00", "10" ];
    const actualCoordinates = player.bFactory.ships[0].coordinates;
    expect(actualCoordinates).toEqual(expectedCoordinates);
})