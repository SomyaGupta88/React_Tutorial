import React, { useState } from "react";

function TodoItem(props) {
  const [text, setText] = useState(false);

  function handleClick() {
    setText((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <li
      onClick={handleClick}
      style={{ textDecoration: text && "line-through" }}
    >
      {props.text}
    </li>
  );
}

export default TodoItem;
