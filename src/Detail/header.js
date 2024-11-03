import { useState } from "react";

export default function Header({
  name,
  setName,
  showResolved,
  setShowResolved,
  currentUser,
  currentShoppingListOwnerId,
}) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="card-header d-flex justify-content-between align-items-center">
      {isEditing ? (
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      ) : (
        <h2>{name}</h2>
      )}
      <div className="d-flex gap-2">
        {currentUser === currentShoppingListOwnerId && (
          <button
            className="btn btn-primary"
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? "Save" : "Change name"}
          </button>
        )}
        <button
          className="btn btn-secondary"
          onClick={() => setShowResolved(!showResolved)}
        >
          {showResolved ? "Show all" : "Hide resolved"}
        </button>
      </div>
    </div>
  );
}
