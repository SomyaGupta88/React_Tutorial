import React from "react";
import contacts from "../contacts";
import CreateCard from "./CreateCard.jsx";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(CreateCard)}
    </div>
  );
}

export default App;
