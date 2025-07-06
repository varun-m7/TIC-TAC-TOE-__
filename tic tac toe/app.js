import { renderBoard, handleMove } from './game/board.js';

let currentPlayer = 'X';
let gameOver = false;
let cells = Array(9).fill(null);

const app = document.getElementById('app');

function renderApp() {
  app.innerHTML = `
    <div class="board" id="board"></div>
    <p id="status">Player ${currentPlayer}'s turn</p>
    <button id="resetBtn">Restart</button>
  `;
  renderBoard(cells, handleClick);
  document.getElementById('resetBtn').addEventListener('click', resetGame);
}

function handleClick(index) {
  if (cells[index] || gameOver) return;
  cells[index] = currentPlayer;

  if (handleMove(cells, currentPlayer)) {
    document.getElementById('status').textContent = `🎉 Player ${currentPlayer} wins!`;
    gameOver = true;
  } else if (!cells.includes(null)) {
    document.getElementById('status').textContent = "It's a draw!";
    gameOver = true;
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    document.getElementById('status').textContent = `Player ${currentPlayer}'s turn`;
  }
  renderBoard(cells, handleClick);
}

function resetGame() {
  currentPlayer = 'X';
  cells = Array(9).fill(null);
  gameOver = false;
  renderApp();
}

renderApp();

