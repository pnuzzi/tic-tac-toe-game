import { useState } from "react";

export default function Player({ name, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  return (
    <li>
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
      <button
        className="edit"
        onClick={() => setIsEditing((editing) => !editing)}
      >
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
