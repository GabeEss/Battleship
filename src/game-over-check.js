export default function gameOverCheck(player) {
    for(let i = 0; i < player.bFactory.ships.length; i++) {
        if(player.bFactory.ships[i].isSunk()) {
            return true;
        }
    }
    return false;
}