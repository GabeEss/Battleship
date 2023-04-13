export function createShip(length, array) {
    const coordinates = array;
    let hits = new Array(length).fill(false); // Fill the hits array with false values.
    let sunk = false;
  
    function hit() {
        // Find the next available hit that is false and make it true and then break the loop.
        for(let i = 0; i < hits.length; i++) {
          if(hits[i] === false) {
            hits[i] = true;
            break;
          }
        }
        
        // If every element in the hits array is true.
        if (hits.every(hit => hit)) {
          sunk = true;
          return true;
        } else return false;
    }
  
    function getLength() {
      return length;
    }
  
    function getHits() {
      return hits.slice();
    }
  
    function isSunk() {
      return sunk;
    }
  
    return {
      hit,
      getLength,
      getHits,
      isSunk,
      coordinates
    };
  }