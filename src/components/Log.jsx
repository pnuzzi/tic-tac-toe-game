export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li keu={`${turn.square.rowIndex}${turn.square.colIndex}`}>
          {turn.player} selected {turn.square.rowIndex},{turn.square.colIndex}
        </li>
      ))}
    </ol>
  );
}
