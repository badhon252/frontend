import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header>
        <h1>Tic Tac Toe</h1>
        <Game />
      </header>
    </div>
  );
}

function Game() {
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

function newTicTacToeGrid() {
  generateGrid(3, 3, () => null);
}

console.log(newTicTacToeGrid());

function generateGrid(rows, columns, mapper) {
  return Array(rows)
    .fill()
    .map(() => {
      Array(columns).fill().map(mapper);
    });
}
