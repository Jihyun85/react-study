import React from "react";

function TodoItem({ id, todo, onToggle }) {
  return (
    <li id={id} onClick={onToggle}>
      {todo}
    </li>
  );
}

export default React.memo(TodoItem);
