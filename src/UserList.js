import React from "react";

const User = ({ user, onRemove, onToggle }) => {
  return (
    <div>
      <span
        style={{ color: user.active ? "violet" : "black", cursor: "pointer" }}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </span>
      /{user.age}세/{user.email}
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
};

export default function UserList({ users, onRemove, onToggle }) {
  return (
    <>
      {users.map((user) => (
        <User
          key={user.id}
          user={user}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </>
  );
}
