import React from "react";
import Emojis from "../emojipedia";
import CreateCard from "./CreateCard.jsx";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{Emojis.map(CreateCard)}</dl>
    </div>
  );
}

export default App;
