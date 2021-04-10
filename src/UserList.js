import React from "react";

const User = ({ name, age, email }) => {
  return (
    <p>
      {name}/{age}세/{email}
    </p>
  );
};

export default function UserList() {
  const users = [
    {
      id: 1,
      name: "Suho",
      age: 31,
      email: "jm@exo.com",
    },
    {
      id: 2,
      name: "Xiumin",
      age: 32,
      email: "xiuxiu@exo.com",
    },
    {
      id: 3,
      name: "Baekhyun",
      age: 30,
      email: "kyung@exo.com",
    },
  ];

  return (
    <>
      {users.map((user) => (
        <User key={user.id} {...user} />
      ))}
    </>
  );
}
