
const boardSize = 15;
let currentPlayer = 'black';
let gameActive = true;
let board = [];

function createBoard() {
    const gameBoard = document.getElementById('gameBoard');
    for (let i = 0; i < boardSize; i++) {
        board[i] = [];
        for (let j = 0; j < boardSize; j++) {
            const cell = document.createElement('div');
            cell.addEventListener('click', () => placeStone(i, j));
            gameBoard.appendChild(cell);
            board[i][j] = cell;
        }
    }
}

function placeStone(i, j) {
    if (!gameActive || board[i][j].classList.contains('black') || board[i][j].classList.contains('white')) return;
    board[i][j].classList.add(currentPlayer);
    checkWin(i, j);
    currentPlayer = currentPlayer === 'black' ? 'white' : 'black';
    document.getElementById('playerTurn').textContent = `Player ${currentPlayer === 'black' ? '1: Black\'s' : '2: White\'s'} turn`;
}

function checkWin(row, col) {
    if (checkDirection(row, col, 1, 0) + checkDirection(row, col, -1, 0) > 3 ||
        checkDirection(row, col, 0, 1) + checkDirection(row, col, 0, -1) > 3 ||
        checkDirection(row, col, 1, 1) + checkDirection(row, col, -1, -1) > 3 ||
        checkDirection(row, col, 1, -1) + checkDirection(row, col, -1, 1) > 3) {
        document.getElementById('gameStatus').textContent = `Game Status: Player ${currentPlayer === 'black' ? '1' : '2'} wins`;
        gameActive = false;
    }
}

function checkDirection(row, col, dRow, dCol) {
    let total = 0;
    let i = row + dRow;
    let j = col + dCol;
    while (i >= 0 && i < boardSize && j >= 0 && j < boardSize && board[i][j].classList.contains(currentPlayer)) {
        total++;
        i += dRow;
        j += dCol;
    }
    return total;
}

document.getElementById('restartButton').addEventListener('click', () => {
    board.forEach(row => row.forEach(cell => cell.className = ''));
    currentPlayer = 'black';
    gameActive = true;
    document.getElementById('playerTurn').textContent = 'Player 1: Black\'s turn';
    document.getElementById('gameStatus').textContent = 'Game Status: Ongoing';
});

createBoard();
