function createShip(length) {
    let hits = new Array(length).fill(false);
    let isSunk = false;
  
    function hit(position) {
      if (position >= 0 && position < length) {
        hits[position] = true;
        if (hits.every(hit => hit)) {
          isSunk = true;
        }
        return true;
      }
      return false;
    }
  
    function getLength() {
      return length;
    }
  
    function getHits() {
      return hits.slice();
    }
  
    function isSunk() {
      return isSunk;
    }
  
    return {
      hit,
      getLength,
      getHits,
      isSunk
    };
  }