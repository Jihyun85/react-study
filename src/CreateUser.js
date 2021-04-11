import React from "react";

export default React.memo(function CreateUser({
  username,
  email,
  age,
  onChange,
  onCreate,
}) {
  return (
    <div>
      <input
        name="username"
        placeholder="계정명"
        onChange={onChange}
        value={username}
      />
      <input
        name="email"
        placeholder="이메일"
        onChange={onChange}
        value={email}
      />
      <input name="age" placeholder="나이" onChange={onChange} value={age} />
      <button type="submit" onClick={onCreate}>
        등록
      </button>
    </div>
  );
});
