import React, { useEffect } from "react";
import { getUser, useUsersDispatch, useUsersState } from "./UserContext";

function User({ id }) {
  const state = useUsersState();
  const dispatch = useUsersDispatch();

  const { data: user, loading, error } = state.user;

  useEffect(() => {
    getUser(dispatch, id);
  }, [dispatch, id]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!user) return null;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>
        <b>Email:</b> {user.email}
      </p>
    </div>
  );
}

export default User;
