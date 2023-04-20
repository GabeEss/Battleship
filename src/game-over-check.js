export default function gameOverCheck(player) {
    let count = 0;

    for(let i = 0; i < player.bFactory.ships.length; i++) {
        if(player.bFactory.ships[i].isSunk()) {
            count++;
        }
    }
    if(count == 5) return true;

    return false;
}