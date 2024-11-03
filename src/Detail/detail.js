import React from "react";
import ItemList from "./itemList";
import Header from "./header";
import MemberList from "./memberList";
import { useState } from "react";

const currentShoppingListOwnerId = 1;

const mockData = [
  { id: 1, name: "Item 1", resolved: true },
  { id: 2, name: "Item 2", resolved: false },
  { id: 3, name: "Item 3", resolved: false },
];
const mockMembers = [
  { id: 1, name: "Radek" },
  { id: 2, name: "Kuba" },
  { id: 3, name: "Kasia" },
];

export default function Detail() {
  const [items, setItems] = useState(mockData);
  const [name, setName] = useState("Shopping List name");
  const [showResolved, setShowResolved] = useState(false);
  const [members, setMembers] = useState(mockMembers);
  const [currentUser, setCurrentUser] = useState(1);

  return (
    <div className="card">
      <Header
        name={name}
        setName={setName}
        showResolved={showResolved}
        setShowResolved={setShowResolved}
        currentUser={currentUser}
        currentShoppingListOwnerId={currentShoppingListOwnerId}
      />
      <ItemList
        items={items}
        setItems={setItems}
        showResolved={showResolved}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />
      <MemberList
        members={members}
        setMembers={setMembers}
        setCurrentUser={setCurrentUser}
        currentUser={currentUser}
        currentShoppingListOwnerId={currentShoppingListOwnerId}
      />
    </div>
  );
}
