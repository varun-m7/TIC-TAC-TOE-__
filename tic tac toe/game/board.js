export function renderBoard(cells, onClick) {
  const board = document.getElementById('board');
  board.innerHTML = '';
  cells.forEach((cell, i) => {
    const div = document.createElement('div');
    div.classList.add('cell');
    div.textContent = cell;
    div.addEventListener('click', () => onClick(i));
    board.appendChild(div);
  });
}

export function handleMove(cells, player) {
  const winPatterns = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];
  return winPatterns.some(pattern =>
    pattern.every(index => cells[index] === player)
  );
}
