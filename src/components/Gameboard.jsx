const initialGameboard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function Gameboard({ onSelectSquare, turns }) {
  let gameboard = initialGameboard;

  for (const turn of turns) {
    const { square, player } = turn;
    const { rowIndex, colIndex } = square;

    gameboard[rowIndex][colIndex] = player;
  }

  //   const [gameboard, setGameboard] = useState(initialGameboard);

  //   function handleSelectSquare(rowIndex, colIndex) {
  //     setGameboard((prev) => {
  //       const updatedGameboard = [...prev.map((innerArray) => [...innerArray])];
  //       updatedGameboard[rowIndex][colIndex] = activePlayer;
  //       return updatedGameboard;
  //     });
  //     onSelectSquare();
  //   }

  return (
    <ol id="game-board">
      {gameboard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  className="square"
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
