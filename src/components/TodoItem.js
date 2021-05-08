import React from "react";

function TodoItem({ id, todo, onClick }) {
  return (
    <li id={id} onClick={onClick}>
      {todo}
    </li>
  );
}

export default React.memo(TodoItem);
