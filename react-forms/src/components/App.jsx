import React, { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  var name = "";

  function handleChange(event) {
    name = event.target.value;
  }

  function handleSubmit(event) {
    setValue(name);

    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {value}</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
