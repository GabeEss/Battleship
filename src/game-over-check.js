// 'player' is the player object.
// 'identifier' identifies if player is 'one' or 'two'
// When the count is 5 (because there are 5 ships) the game ends.
export default function gameOverCheck(player, identifier) {
    let count = 0;

    for(let i = 0; i < player.bFactory.ships.length; i++) {
        let ship = player.bFactory.ships[i];
        if(ship.isSunk()) {
            player.bFactory.addSunkShip(ship); // add the ship to a set of sunk ships
            sunkModifier(player, identifier); // modify the styling of the ship.
            count++; // iterate the count
        }
    }
    if(count == 5) return true;

    return false;
}


// Takes the player and the identifier to determine if the player is player one or two.
// Finds the set of sunk ships within the player object and adds the sunk class to the tiles
// at the coordinates of each sunk ship.
function sunkModifier(player, identifier) {
    const sunkShips = player.bFactory.sunkShips;
    sunkShips.forEach((item) => {
        const coords = item.coordinates;

        coords.forEach((coord) => {
            if(identifier == 'one') {
                let tile = document.getElementById(coord);
                tile.classList.add('sunk');
            }
            else {
                let tile = document.getElementById("e" + coord);
                tile.classList.add('sunk');
            }
                
        })
    })
}

