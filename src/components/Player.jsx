import { useState } from "react";

export default function Player({ name, symbol, isActive, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  function handleEditClick() {
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing ? (
          <form>
            <input
              type="text"
              required
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
            />
            <span className="player-symbol">{symbol}</span>
          </form>
        ) : (
          <>
            <span className="player-name">{playerName}</span>
            <span className="player-symbol">{symbol}</span>
          </>
        )}
      </span>
      <button className="edit" onClick={() => handleEditClick()}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
