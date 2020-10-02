import React, { useState } from "react";

function App() {
  const [heading, setHeading] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false);
  //const [isMouseOut, setMouseOut]= useState(true);

  function submit() {
    setHeading("Submitted");
  }

  function mouseOver() {
    setMouseOver(true);
  }

  function mouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{heading}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseOver && "black" }}
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}
        onClick={submit}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
