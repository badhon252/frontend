import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header>
        <h1>Tic Tac Toe</h1>
      </header>
      <Game />
    </div>
  );
}

function generateGrid(rows, columns, mapper) {
  return Array(rows)
    .fill()
    .map(() => {
      Array(columns).fill().map(mapper);
    });
}

const newTicTacToeGrid = () => {
  return generateGrid(3, 3, () => null);
};

function Game() {
  const grid = newTicTacToeGrid();
  const grid = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  console.log(grid);
  return (
    <div className="game">
      <div className="game-board">
        <h3>Game</h3>
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}
