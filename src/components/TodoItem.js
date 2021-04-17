import React, { useRef } from "react";
import PropTypes from "prop-types";
import { MdModeEdit, MdDelete } from "react-icons/md";

function TodoItem({ todo, onEdit, onRemove }) {
  const ref = useRef();
  const handleEdit = (id, ref) => {
    if (!ref.current) return;
    onEdit(id, ref.current.innerText);
  };
  return (
    <li>
      <p ref={ref}>{todo.text}</p>
      <div onClick={() => handleEdit(todo.id, ref)}>
        <MdModeEdit />
      </div>
      <div onClick={() => onRemove(todo.id)}>
        <MdDelete />
      </div>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
  }),
  onEdit: PropTypes.func,
  onRemove: PropTypes.func,
};

export default React.memo(TodoItem);
