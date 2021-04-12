import React, { useContext } from "react";
import { UserDispatch } from "./App";

const User = React.memo(({ user }) => {
  const dispatch2 = useContext(UserDispatch);

  return (
    <div>
      <span
        style={{ color: user.active ? "violet" : "black", cursor: "pointer" }}
        onClick={() => {
          dispatch2({
            type: "TOGGLE_ACTIVE",
            id: user.id,
          });
        }}
      >
        {user.username}
      </span>
      /{user.age}세/{user.email}
      <button
        onClick={() => {
          dispatch2({
            type: "REMOVE_USER",
            id: user.id,
          });
        }}
      >
        삭제
      </button>
    </div>
  );
});

export default React.memo(function UserList({ users }) {
  return (
    <>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </>
  );
});
