import { useState } from "react";

const initialGameboard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function Gameboard() {
  const [gameboard, setGameboard] = useState(initialGameboard);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameboard((prev) => {
      const updatedGameboard = [...prev.map((innerArray) => [...innerArray])];
      updatedGameboard[rowIndex][colIndex] = "X";
      return updatedGameboard;
    });
  }

  return (
    <ol id="game-board">
      {gameboard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  className="square"
                  onClick={() => handleSelectSquare(rowIndex, colIndex)}
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
