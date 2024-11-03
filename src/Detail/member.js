export default function Member({
  member,
  handleMemberNameChange,
  handleDelete,
  currentUser,
  setCurrentUser,
  currentShoppingListOwnerId,
}) {
  return (
    <li
      key={member.id}
      className="list-group-item d-flex justify-content-between align-items-center"
    >
      {currentUser === currentShoppingListOwnerId ||
      currentUser === member.id ? (
        <input
          type="text"
          value={member.name}
          onChange={(e) => handleMemberNameChange(e, member.id)}
        />
      ) : (
        <span>{member.name}</span>
      )}
      <div className="d-flex gap-2">
        <button
          className="btn btn-primary btn-sm"
          onClick={() => setCurrentUser(member.id)}
        >
          {currentUser === member.id ? "Current user" : "Set as current user"}
        </button>
        {currentUser === currentShoppingListOwnerId ||
        currentUser === member.id ? (
          <button
            className="btn btn-danger btn-sm"
            onClick={() => handleDelete(member.id)}
          >
            Delete
          </button>
        ) : null}
      </div>
    </li>
  );
}
