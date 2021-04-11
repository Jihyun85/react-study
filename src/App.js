import { useMemo, useRef, useState } from "react";
import CreateUser from "./CreateUser";
import UserList from "./UserList";

function countActiveUsers(users) {
  console.log("활성 사용자 수 세는중...");
  return users.filter((user) => user.active).length;
}

function App() {
  const [input, setInput] = useState({
    username: "",
    email: "",
    age: "",
  });

  const { username, email, age } = input;

  const [users, setUsers] = useState([
    {
      id: 1,
      username: "Suho",
      age: 31,
      email: "jm@exo.com",
      active: true,
    },
    {
      id: 2,
      username: "Xiumin",
      age: 32,
      email: "xiuxiu@exo.com",
      active: false,
    },
    {
      id: 3,
      username: "Baekhyun",
      age: 30,
      email: "kyung@exo.com",
      active: false,
    },
  ]);

  const nextId = useRef(4);
  //console.log(nextId); // {current: 4} ⇒ 객체이기 때문에 nextId.current += 1과 같이 값을 바꿀 수 있는 것!!!

  const onChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
      age,
    };
    // 추가하는 방법은 두 가지가 있다
    //setUsers([...users, user]);
    setUsers(users.concat(user));
    setInput({
      username: "",
      email: "",
      age: "",
    });
    nextId.current += 1;
  };

  const onRemove = (id) => {
    // 삭제 시에는 filter를 이용하는 것이 좋다. (filter는 새로운 배열 반환)
    setUsers(users.filter((user) => user.id !== id));
  };

  const onToggle = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  const count = useMemo(() => countActiveUsers(users), [users]);
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        age={age}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성사용자 수 : {count}</div>
    </>
  );
}

export default App;
