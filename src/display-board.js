export function displayBoard(player) {
    const table = document.createElement("table"); // The table to hold the board.
    const board = player.bFactory.board; // The board array.

    const numRow = document.createElement("tr"); // To hold the number row above the gameboard.
    numRow.classList.add("row");
    // Add an empty cell to the left of the numbers and above the letters.
    const emptyCell = document.createElement("td");
    emptyCell.classList.add('empty-cell');
    numRow.appendChild(emptyCell);

    // Loop to add the number row above the gameboard.
    for(let i = 0; i < board.length; i++) {
        const numberCell = document.createElement("td");
        numberCell.classList.add("number-cell");
        numberCell.textContent = i + 1;
        numRow.appendChild(numberCell);
    }
    
    table.appendChild(numRow);

    for(let i = 0; i < board.length; i++) {
        const row = document.createElement("tr");
        row.classList.add("row");
        const letterCell = document.createElement("td");
        letterCell.classList.add('letter-cell');
        letterCell.textContent = letterCell.textContent = String.fromCharCode(65 + i);
        row.appendChild(letterCell);
        for(let j = 0; j < board[i].length; j++) {
            const cell = document.createElement('td');
            cell.classList.add('cell');
            let coord = j.toString() + i.toString();
            cell.setAttribute('id', coord);
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    
    return table;
}

export function displayEnemyBoard(player) {
    const table = document.createElement("table"); // The table to hold the board.
    const board = player.bFactory.board; // The board array.

    const numRow = document.createElement("tr"); // To hold the number row above the gameboard.
    numRow.classList.add("row");
    // Add an empty cell to the left of the numbers and above the letters.
    const emptyCell = document.createElement("td");
    emptyCell.classList.add('empty-cell');
    numRow.appendChild(emptyCell);

    // Loop to add the number row above the gameboard.
    for(let i = 0; i < board.length; i++) {
        const numberCell = document.createElement("td");
        numberCell.classList.add("number-cell");
        numberCell.textContent = i + 1;
        numRow.appendChild(numberCell);
    }
    
    table.appendChild(numRow);

    for(let i = 0; i < board.length; i++) {
        const row = document.createElement("tr");
        row.classList.add("row");
        const letterCell = document.createElement("td");
        letterCell.classList.add('letter-cell');
        letterCell.textContent = letterCell.textContent = String.fromCharCode(65 + i);
        row.appendChild(letterCell);
        for(let j = 0; j < board[i].length; j++) {
            const cell = document.createElement('td');
            cell.classList.add('enemy-cell');
            let coord = j.toString() + i.toString();
            cell.setAttribute('id', coord);
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    
    return table;
}