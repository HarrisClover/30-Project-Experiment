
let board = Array(15).fill().map(() => Array(15).fill(''));
let turn = 'black';

document.getElementById('board').innerHTML = board.map((row, i) => 
    row.map((cell, j) => `<div id="${i}-${j}" class="cell"></div>`).join('')
).join('');

document.querySelectorAll('.cell').forEach(cell => {
    cell.addEventListener('click', () => {
        if (cell.classList.contains('black') || cell.classList.contains('white')) return;
        cell.classList.add(turn);
        let [i, j] = cell.id.split('-');
        board[i][j] = turn;
        if (checkWin(i, j)) {
            document.getElementById('winner').innerText = `${turn} wins!`;
        } else {
            turn = turn === 'black' ? 'white' : 'black';
            document.getElementById('turn').innerText = `${turn}'s turn`;
        }
    });
});

function checkWin(i, j) {
    let directions = [[-1, 0], [1, 0], [0, -1], [0, 1], [-1, -1], [1, 1], [-1, 1], [1, -1]];
    return directions.some(([dx, dy]) => {
        let count = 0;
        for (let x = +i, y = +j; board[x] && board[x][y] === turn; x += dx, y += dy) count++;
        for (let x = +i - dx, y = +j - dy; board[x] && board[x][y] === turn; x -= dx, y -= dy) count++;
        return count > 5;
    });
}
