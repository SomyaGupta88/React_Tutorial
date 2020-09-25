import React from "react";
import Card from "./Card.jsx";
import contacts from "../contacts.js";

function App() {
  return (
    <Card
      name={contacts[0].name}
      img={contacts[0].imgURL}
      phn={contacts[0].phone}
      email={contacts[0].email}
    />
  );
}

export default App;
