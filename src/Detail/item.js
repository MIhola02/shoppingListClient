export default function Item({
  item,
  handleItemNameChange,
  handleResolve,
  handleDelete,
}) {
  return (
    <li
      key={item.id}
      className="list-group-item d-flex justify-content-between align-items-center"
    >
      <input
        type="text"
        value={item.name}
        onChange={(e) => handleItemNameChange(e, item.id)}
      />
      <div className="d-flex gap-2">
        {item.resolved ? (
          <button
            className="btn btn-primary btn-sm"
            onClick={() => handleResolve(item.id)}
          >
            Unresolve
          </button>
        ) : (
          <button
            className="btn btn-primary btn-sm"
            onClick={() => handleResolve(item.id)}
          >
            Resolve
          </button>
        )}
        <button
          className="btn btn-danger btn-sm"
          onClick={() => handleDelete(item.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}
