import React from "react";

function TodoForm({ value, onSubmit, onChange }) {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="오늘 할 일을 적어주세요!"
        onChange={onChange}
        value={value}
      />
      <button type="submit">제출</button>
    </form>
  );
}

export default TodoForm;
