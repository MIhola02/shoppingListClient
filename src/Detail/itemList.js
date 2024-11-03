import Item from "./item";

export default function ItemList({
  items,
  setItems,
  showResolved,
  currentUser,
}) {
  const handleItemNameChange = (e, id) => {
    setItems(
      items.map((i) => (i.id === id ? { ...i, name: e.target.value } : i))
    );
  };

  const handleResolve = (id) => {
    setItems(
      items.map((i) => (i.id === id ? { ...i, resolved: !i.resolved } : i))
    );
  };

  const handleDelete = (id) => {
    setItems(items.filter((i) => i.id !== id));
  };

  const handleAddItem = () => {
    setItems([...items, { id: items.length + 1, name: "", resolved: false }]);
  };

  return (
    <div className="card">
      <h3 className="card-header">Items</h3>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"></li>
        {items
          .filter((item) => (showResolved ? !item.resolved : true))
          .map((item) => (
            <Item
              item={item}
              handleItemNameChange={handleItemNameChange}
              handleResolve={handleResolve}
              handleDelete={handleDelete}
              key={item.id}
              currentUser={currentUser}
            />
          ))}
        <button className="btn btn-primary" onClick={handleAddItem}>
          Add item
        </button>
      </ul>
    </div>
  );
}
