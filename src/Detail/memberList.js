import Member from "./member";

export default function MemberList({
  members,
  setMembers,
  currentUser,
  setCurrentUser,
  currentShoppingListOwnerId,
}) {
  const handleMemberNameChange = (e, id) => {
    setMembers(
      members.map((i) => (i.id === id ? { ...i, name: e.target.value } : i))
    );
  };

  const handleDelete = (id) => {
    setMembers(members.filter((i) => i.id !== id));
  };

  const handleAddItem = () => {
    setMembers([...members, { id: members.length + 1, name: "" }]);
  };

  return (
    <div className="card">
      <h3 className="card-header">Members Owner</h3>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"></li>
        {members.map((member) => (
          <Member
            member={member}
            handleMemberNameChange={handleMemberNameChange}
            handleDelete={handleDelete}
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
            key={member.id}
            currentShoppingListOwnerId={currentShoppingListOwnerId}
          />
        ))}
        {currentUser === currentShoppingListOwnerId && (
          <button className="btn btn-primary" onClick={handleAddItem}>
            Add User
          </button>
        )}
      </ul>
    </div>
  );
}
