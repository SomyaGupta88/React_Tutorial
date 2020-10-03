import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: ""
  });

  function handleName(event) {
    // const newValue = event.target.value;
    // const inputValue = event.target.name;
    const { value, name } = event.target;

    setFullName((previousValue) => {
      if (name === "fName") {
        return {
          fname: value,
          lname: previousValue.lname
        };
      } else if (name === "lName") {
        return {
          fname: previousValue.fname,
          lname: value
        };
      }
    });
  }

  //const [lname, setLname] = useState("");

  // function handleFname(event) {
  //   setFname(event.target.value);
  // }

  // function handleLname(event) {
  //   setLname(event.target.value);
  // }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fname} {fullName.lname}
      </h1>
      <form>
        <input
          onChange={handleName}
          name="fName"
          placeholder="First Name"
          value={fullName.fname}
        />
        <input
          onChange={handleName}
          name="lName"
          placeholder="Last Name"
          value={fullName.lname}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
